function Select({ children, value, onChange }) {
  return (
    <select
      className="h-9 rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-700 outline-none transition focus:border-slate-400 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
      value={value}
      onChange={onChange}
    >
      {children}
    </select>
  );
}

export default Select;
