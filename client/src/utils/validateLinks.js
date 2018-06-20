export default videos => {
    const invalidVideos = videos.split(',').map(video => video.trim());

    return invalidVideos.length
        ? `These videos are invalid: ${invalidVideos}`
        : undefined;
};
