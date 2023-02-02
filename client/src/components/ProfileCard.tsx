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
      <div className='mx-auto flex h-[95%] w-[95%] flex-col divide-y-2 divide-zinc-300/20 rounded-md bg-zinc-900/50 p-4 md:px-12 md:py-6'>
        {/* Info Header */}
        <div className='flex flex-col items-center space-y-8 pb-4 md:mb-6 md:flex-row  md:space-y-0 '>
          {/* Info */}
          <div className='flex h-full w-[85%] flex-col items-center justify-center space-y-4  md:flex-[0.6]  md:items-start md:space-y-8 md:text-xl'>
            <h1 className='flex w-full items-center justify-between'>
              <span className='flex-[0.5]  text-center font-bold md:flex-[0.3] md:text-left'>
                Name:
              </span>
              <span className='flex-[0.5]  text-left  text-zinc-300 md:flex-[0.7]'>
                {data.name}
              </span>
            </h1>
            <h1 className='flex w-full items-center justify-between'>
              <span className='flex-[0.5]  text-center font-bold md:flex-[0.3] md:text-left'>
                Email:
              </span>
              <span className='flex-[0.5]  text-left  text-zinc-300 md:flex-[0.7]'>
                {data.email}
              </span>
            </h1>
            <h1 className='flex w-full items-center justify-between'>
              <span className='flex-[0.5]  text-center font-bold md:flex-[0.3] md:text-left'>
                Role:
              </span>
              <span className='flex-[0.5]  text-left  text-zinc-300 md:flex-[0.7]'>
                {data.role}
              </span>
            </h1>
            <h1 className='flex w-full items-center justify-between'>
              <span className='flex-[0.5]  text-center font-bold md:flex-[0.3] md:text-left'>
                Id:
              </span>
              <span className='flex-[0.5]  text-left  text-zinc-300 md:flex-[0.7]'>
                {data.id}
              </span>
            </h1>
          </div>

          {/* Image */}
          <div className='h-full  md:flex-[0.4]'>
            <img
              src={data.image}
              alt='Profile Image'
              className='h-[10rem] w-[10rem] rounded-full border-2 border-violet-600 p-1 md:mx-auto md:h-[11rem] md:w-[11rem] lg:h-[13rem] lg:w-[13rem]'
            />
          </div>
        </div>

        {/* About */}

        <div className='py-4'>
          <h1 className='text-left text-xl font-bold '>About</h1>
        </div>
      </div>
    </div>
  );
};
export default ProfileCard;
