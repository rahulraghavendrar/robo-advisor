function GlowButton({ text }) {

  return (
    <button className="px-6 py-3 rounded-2xl bg-cyan-500 hover:bg-cyan-400 transition shadow-lg shadow-cyan-500/40 font-semibold">

      {text}

    </button>
  );
}

export default GlowButton;