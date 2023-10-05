import { Separator } from '@/components/ui/separator';
import { Option } from '@/lib/types';
import toCurrencyString from '@/utils/format-number';

type Props = {
   option: Option;
};

export default function ProductOption({ option }: Props) {
   if (!option) return null;

   return (
      <div className="relative flex h-12 w-full items-center justify-between px-5">
         <p className="flex-1 text-center text-sm font-semibold">
            {toCurrencyString(option.price)}
         </p>
         <Separator orientation="vertical" className="h-full bg-gray-300" />
         <p className="flex-1 text-center text-sm">
            <strong>{option.duration}</strong> {option.type}
         </p>
      </div>
   );
}
