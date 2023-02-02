import { useGetLoggedInTeacherQuery } from '../../app/slices/teacherApiSlice';
import ProfileCard from '../../components/ProfileCard';

const TProfile = () => {
  const { data, isLoading, error } = useGetLoggedInTeacherQuery({});

  let content =
    isLoading && !data ? (
      <div>Loading...</div>
    ) : error ? (
      <div>Some error occured...</div>
    ) : (
      data && <ProfileCard data={data.teacher} />
    );

  return content;
};
export default TProfile;
