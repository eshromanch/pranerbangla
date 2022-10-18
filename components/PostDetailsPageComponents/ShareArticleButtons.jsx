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
        <div className='flex  gap-5 justify-center md:gap-2'>
        <FacebookShareButton
          url={`http://localhost:3000/${props.url}`}
          quote={'Praner bangla article'}
          hashtag={'#pranerbangla'}
        >
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <TwitterShareButton
  url={`http://localhost:3000/${props.url}`}
  title={'Praner bangla article'}
>
  <TwitterIcon size={32} round />
</TwitterShareButton>
        <PinterestShareButton
          url={`http://localhost:3000/${props.url}`}
          media={'Praner bangla article'}
        >
          <PinterestIcon size={32} round />
        </PinterestShareButton>
        <RedditShareButton
          url={`http://localhost:3000/${props.url}`}
          title={'Praner bangla article'}
        >
          <RedditIcon size={32} round />
        </RedditShareButton>
        <WhatsappShareButton
  url={`http://localhost:3000/${props.url}`}
  title={'Praner bangla article'}
  separator=":: "
>
  <WhatsappIcon size={32} round />
</WhatsappShareButton>
<LinkedinShareButton url={`http://localhost:3000/${props.url}`}>
  <LinkedinIcon size={32} round />
</LinkedinShareButton>
<FacebookMessengerShareButton
  url={`http://localhost:3000/${props.url}`}
  appId={''}
>
  <FacebookMessengerIcon size={32} round />
</FacebookMessengerShareButton>
<EmailShareButton
  url={`http://localhost:3000/${props.url}`}
  subject={'Praner bangla article'}
  body="body"
>
  <EmailIcon size={32} round />
</EmailShareButton>
        </div>
    );
}

export default ShareArticleButtons;