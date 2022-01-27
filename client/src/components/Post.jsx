import React from 'react';

const Post = () => {
  return (
    <>
      <li>
        <div>
          <img src="https://placedog.net/500" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris posuere auctor enim, nec mattis lectus placerat id. Cras vitae finibus nunc. Ut sed lacus ac mauris tempor rhoncus. Curabitur tempus dictum interdum. In hac habitasse platea dictumst.</p>
        </div>
        <ul>
          <li>
            <p>Comment 1</p>
            <ul>
              <li>
                <p>Comment 1 reply</p>
              </li>
            </ul>
          </li>
          <li>
            <p>Comment 2</p>
            <ul>
              <li>
                <p>Comment 2 reply</p>
                <ul>
                  <li>
                    <p>Comment 2 reply, reply</p>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </>
  )

};

export default Post;