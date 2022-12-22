const src = 'https://www.youtube.com/embed';


const Video = ({embed}) => {
  return (
    <iframe
      width="760"
      height="415"
      src={`${src}/${embed}`}
      title="Youtube Player"
      frameborder="0"
      allowFullScreen
    />
  );
};

export default Video;
