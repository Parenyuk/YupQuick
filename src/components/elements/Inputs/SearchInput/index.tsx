import { useState } from 'react';
import { TextInput, View } from 'react-native';
import { cn } from '@/src/lib/cn';

type SearchInputProps = {
    onSearch?: (value: string) => void;
    className?: string;
};

const SearchInput = ({ onSearch, className }: SearchInputProps) => {
    const [value, setValue] = useState('');

    const handleChange = (text: string) => {
        setValue(text);
        onSearch?.(text);
    };

    return (
        <View className={cn('flex-1 flex-row items-center bg-white rounded-full px-3 border border-neutral-200', className)}>
            <TextInput
                value={value}
                onChangeText={handleChange}
                placeholder="Search"
                placeholderTextColor="#9ca3af"
                // className='flex-1 text-font-primary text-sm'
                style={{ height: 26, paddingTop: 0, paddingBottom: 0, paddingLeft: 0, paddingRight: 0 }}
            />

        </View>
    );
};

export default SearchInput;
