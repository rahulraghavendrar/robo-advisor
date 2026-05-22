from fastapi import APIRouter
from fastapi import Depends

from sqlalchemy.orm import Session

from app.database.db import get_db

from app.models.user import User

from app.schemas.user_schema import (
    UserCreate,
    UserLogin
)

from app.utils.security import (
    hash_password,
    verify_password
)

from app.utils.token import create_access_token

router = APIRouter(
    prefix="/auth",
    tags=["Authentication"]
)

# REGISTER
@router.post("/register")
def register(
    user:UserCreate,
    db:Session = Depends(get_db)
):

    existing_user = db.query(User).filter(
        User.email == user.email
    ).first()

    if existing_user:

        return {
            "error":"Email already exists"
        }

    new_user = User(
        name=user.name,
        email=user.email,
        password=hash_password(user.password)
    )

    db.add(new_user)

    db.commit()

    db.refresh(new_user)

    return {
        "message":"User Registered Successfully"
    }

# LOGIN
@router.post("/login")
def login(
    user:UserLogin,
    db:Session = Depends(get_db)
):

    existing_user = db.query(User).filter(
        User.email == user.email
    ).first()

    if not existing_user:

        return {
            "error":"Invalid email"
        }

    valid_password = verify_password(
        user.password,
        existing_user.password
    )

    if not valid_password:

        return {
            "error":"Invalid password"
        }

    token = create_access_token(
        data={
            "sub":existing_user.email
        }
    )

    return {

        "access_token":token,

        "token_type":"bearer"
    }