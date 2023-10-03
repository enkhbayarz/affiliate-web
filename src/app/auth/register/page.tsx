import { RegisterView } from '@/sections/auth/register';
import { redirect } from 'next/navigation';

type Props = {
   searchParams: {
      token: string;
   };
};

export default function Page({ searchParams }: Props) {
   if (!searchParams.token) redirect('/auth/login');

   return <RegisterView token={searchParams.token} />;
}
