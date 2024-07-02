import { Input } from "@/components/ui/input"

export const SearchInput = ({ value, onChange }) => (
  <div className="max-w-md mx-auto mb-12">
    <Input 
      type="search" 
      placeholder="Search papers..." 
      className="w-full"
      value={value}
      onChange={onChange}
    />
  </div>
);