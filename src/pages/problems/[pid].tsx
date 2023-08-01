import TopBar from '@/components/TopBar';
import Workspace from '@/components/Workspace';

type Props = {};

const SingleProblemPage = (props: Props) => {
  return (
    <div>
      <TopBar problemPage />
      <Workspace />
    </div>
  );
};

export default SingleProblemPage;
