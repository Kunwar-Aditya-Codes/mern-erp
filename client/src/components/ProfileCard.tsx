type ProfileCardProps = {
  name: string;
  email: string;
  id: string;
  _id: string;
  role: string;
  image: string;
};

const ProfileCard = ({ data }: { data: ProfileCardProps }) => {
  return (
    <div className='h-full '>
      <div className='mx-auto flex h-[95%] w-[95%] flex-col rounded-md bg-zinc-900/50 p-4'>
        <div className='flex flex-col items-center space-y-4 md:items-start md:space-y-8 md:text-2xl'>
          <h1 className=''>
            <span className='mr-2 font-bold'>Name:</span> {data.name}
          </h1>
          <h1>
            <span className='mr-2 font-bold'>Email:</span> {data.email}
          </h1>

          <h1>
            <span className='mr-2 font-bold'>Role:</span> {data.role}
          </h1>

          <h1>
            <span className='mr-2 font-bold'>ID:</span> {data.id}
          </h1>
        </div>
      </div>
    </div>
  );
};
export default ProfileCard;
