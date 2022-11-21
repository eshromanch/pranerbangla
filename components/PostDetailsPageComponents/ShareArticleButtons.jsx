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
function ShareArticleButtons(props) {
    return (
        <div className=' flex gap-5 md:gap-2'>
        <FacebookShareButton
          url={`https://pranerbangla.netlify.app/${props.url}`}
          quote={'Pranerbangla article'}
          hashtag={'#pranerbangla'}
        >
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <TwitterShareButton
  url={`https://pranerbangla.netlify.app/${props.url}`}
  title={'Pranerbangla article'}
>
  <TwitterIcon size={32} round />
</TwitterShareButton>

        <WhatsappShareButton
  url={`https://pranerbangla.netlify.app/${props.url}`}
  title={'Pranerbangla article'}
  separator=":: "
>
  <WhatsappIcon size={32} round />
</WhatsappShareButton>
<LinkedinShareButton url={`https://pranerbangla.netlify.app/${props.url}`}>
  <LinkedinIcon size={32} round />
</LinkedinShareButton>
<FacebookMessengerShareButton
  url={`https://pranerbangla.netlify.app/${props.url}`}
  appId={''}
>
  <FacebookMessengerIcon size={32} round />
</FacebookMessengerShareButton>
<EmailShareButton
  url={`https://pranerbangla.netlify.app/${props.url}`}
  subject={'Pranerbangla article'}
  body="body"
>
  <EmailIcon size={32} round />
</EmailShareButton>
        </div>
    );
}

export default ShareArticleButtons;