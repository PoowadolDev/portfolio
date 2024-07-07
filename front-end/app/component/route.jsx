import DownloadLink from '../components/DownloadLink';

const HomePage = () => {
  const fileUrl = '/your-file.pdf'; // Replace with your file path in public directory
  const filename = 'Your File Name.pdf'; // Replace with the desired displayed name

  return (
    <div>
      <h1>Download File</h1>
      <DownloadLink filename={filename} url={fileUrl} />
    </div>
  );
};

export default HomePage;