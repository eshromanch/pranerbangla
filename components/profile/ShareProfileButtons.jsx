import React from 'react';
import {
    FacebookShareButton,
    FacebookIcon,
  } from 'next-share';
  import {
    PinterestShareButton,
    PinterestIcon,
  } from 'next-share'

  import {
    RedditShareButton,
    RedditIcon,
  } from 'next-share'

  import {
    TwitterShareButton,
    TwitterIcon,
  } from 'next-share'
  import {
    WhatsappShareButton,
    WhatsappIcon,
  } from 'next-share'
  import {
    LinkedinShareButton,
    LinkedinIcon,
  } from 'next-share'
  import {
    FacebookMessengerShareButton,
    FacebookMessengerIcon,
  } from 'next-share'

  import {
    EmailShareButton,
    EmailIcon,
  } from 'next-share'
function ShareProfileButtons(props) {
    return (
        <div className='flex  gap-5 justify-center'>
        <FacebookShareButton
          url={props.facebookLink}
          quote={'next-share is a social share buttons for your next React apps.'}
          hashtag={'#nextshare'}
        >
          <FacebookIcon size={20} round />
        </FacebookShareButton>
        <TwitterShareButton
  url={'https://github.com/next-share'}
  title={'next-share is a social share buttons for your next React apps.'}
>
  <TwitterIcon size={20} round />
</TwitterShareButton>
        <PinterestShareButton
          url={'https://github.com/next-share'}
          media={'next-share is a social share buttons for your next React apps.'}
        >
          <PinterestIcon size={20} round />
        </PinterestShareButton>
        <RedditShareButton
          url={'https://github.com/next-share'}
          title={'next-share is a social share buttons for your next React apps.'}
        >
          <RedditIcon size={20} round />
        </RedditShareButton>
        <WhatsappShareButton
  url={'https://github.com/next-share'}
  title={'next-share is a social share buttons for your next React apps.'}
  separator=":: "
>
  <WhatsappIcon size={20} round />
</WhatsappShareButton>
<LinkedinShareButton url={'https://github.com/next-share'}>
  <LinkedinIcon size={20} round />
</LinkedinShareButton>
<FacebookMessengerShareButton
  url={'https://github.com/next-share'}
  appId={''}
>
  <FacebookMessengerIcon size={20} round />
</FacebookMessengerShareButton>
<EmailShareButton
  url={'https://github.com/next-share'}
  subject={'Next Share'}
  body="body"
>
  <EmailIcon size={20} round />
</EmailShareButton>
        </div>
    );
}

export default ShareProfileButtons;