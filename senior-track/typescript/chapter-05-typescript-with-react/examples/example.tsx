type SearchBarProps = {
  query: string;
  onQueryChange: (value: string) => void;
};

export default function SearchBar({
  query,
  onQueryChange,
}: SearchBarProps) {
  return (
    <input
      value={query}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
        onQueryChange(event.target.value)
      }
    />
  );
}
