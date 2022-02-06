// Global vars

/**
 * Builds a video card from the video card template
 *
 * @param {String} videoCardTemplate The HTML template to build the video card
 * @param {Object} video The video which will be represented by the card
 * @return {jQuery} Returns jQuery object Representing the new video card
 */
cumulusRedux.buildVideoCard = function(videoCardTemplate, video)
{
    var videoCard = $(videoCardTemplate);
    var url = cumulusRedux.getVideoUrl(video);
    videoCard.find('img').attr('src', cumulusRedux.baseUrl + '/cc-content/uploads/thumbs/' + video.filename + '.jpg');
    videoCard.find('.glyphicon-time').after(video.duration);
    videoCard.find('.glyphicon-user').after(video.username);
    videoCard.find('a').attr('title', video.title).attr('href', url);
    videoCard.find('.video-title a').text(video.title);
    return videoCard;
}
