function SettingCard({
  title,
  description,
}) {

  return (
    <div className="bg-slate-900/50 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:border-cyan-400/30 transition duration-300">

      <h2 className="text-2xl font-bold">
        {title}
      </h2>

      <p className="text-gray-400 mt-4 leading-7">
        {description}
      </p>

    </div>
  );
}

export default SettingCard;