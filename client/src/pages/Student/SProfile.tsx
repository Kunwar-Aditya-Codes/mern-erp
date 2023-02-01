import { useGetLoggedInStudentQuery } from '../../app/slices/studentApiSlice';
import ProfileCard from '../../components/ProfileCard';

const SProfile = () => {
  const { data, isLoading, error } = useGetLoggedInStudentQuery({});

  let content =
    isLoading && !data ? (
      <div>Loading...</div>
    ) : error ? (
      <div>Some error occured...</div>
    ) : (
      data && <ProfileCard data={data.student} />
    );

  return content;
};
export default SProfile;
