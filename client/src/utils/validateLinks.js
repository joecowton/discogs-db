const re = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/

export default (videos) => {
  const invalidVideos = videos
    .split(',')
    .map(video => video.trim());

  if(invalidVideos.length)
    return `These videos are invalid: ${invalidVideos}`
}
