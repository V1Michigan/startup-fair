export default function Statistic({ value, label }) {
    return (
      <div className="flex flex-col items-start text-white">
        <div className="text-6xl font-bold text-center md:text-left">{value}</div>
        <div className="text-sm text-center md:text-left">{label}</div>
      </div>
    );
  }
