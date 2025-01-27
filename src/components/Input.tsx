interface InputProps {
  placeholder?: string;
}

export default function Input({ placeholder }: InputProps) {
  return (
    <input
      className="border-b-4 border-b-[#9d07d1] w-96 h-10"
      placeholder={placeholder}
    />
  );
}
