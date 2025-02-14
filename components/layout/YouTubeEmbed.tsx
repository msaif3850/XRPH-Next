const YouTubeEmbed = ({ videoId }: { videoId: string }) => {
    return (
        <div className="relative w-full pb-[56.25%] h-0 overflow-hidden rounded-lg">
            <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube Video Player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default YouTubeEmbed;
