import Sidebar from "../../layout/Sidebar";

import AnimatedBackground from "../../components/ui/AnimatedBackground";

import SettingCard from "../../components/settings/SettingCard";

function SettingsPage() {

  return (
    <div className="min-h-screen bg-[#020617] text-white">

      <AnimatedBackground />

      <Sidebar />

      <div className="ml-72 p-10 relative z-10">

        <h1 className="text-6xl font-black mb-10">
          Settings
        </h1>

        <div className="grid grid-cols-2 gap-8">

          <SettingCard
            title="Profile Settings"
            description="Manage your account information and investor preferences."
          />

          <SettingCard
            title="Security"
            description="Enable two-factor authentication and account protection."
          />

          <SettingCard
            title="Notifications"
            description="Configure alerts for market movements and AI insights."
          />

          <SettingCard
            title="Theme Preferences"
            description="Customize dashboard appearance and personalization."
          />

        </div>

      </div>

    </div>
  );
}

export default SettingsPage;