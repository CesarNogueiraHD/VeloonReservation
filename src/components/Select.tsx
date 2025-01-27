interface SelectOption {
  value: string;
  title: string;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  data: Array<SelectOption>;
}

export default function Select({ data, ...props }: SelectProps) {
  return (
    <select
      {...props}
      className="border-2 border-[#9d07d1] h-10 mt-5 rounded-xl pl-2 text-[#9d07d1] outline-none my-2"
    >
      {data.map((d) => (
        <option key={d.value} value={d.value}>
          {d.title}
        </option>
      ))}
    </select>
  );
}
