import MediaRow from '../components/MediaRow';

const Home = () => {
  const mediaArray = [
    {
      media_id: 8,
      user_id: 5,
      filename: 'https://picsum.photos/seed/picture1/1200/800',
      thumbnail: 'https://picsum.photos/seed/thumb1/320/240',
      filesize: 170469,
      media_type: 'image/jpeg',
      title: 'Picture 1',
      description: 'This is a placeholder picture.',
      created_at: '2024-01-07T20:49:34.000Z',
    },
    {
      media_id: 9,
      user_id: 7,
      filename: 'https://picsum.photos/seed/picture2/1200/800',
      thumbnail: 'https://picsum.photos/seed/thumb2/320/240',
      filesize: 1002912,
      media_type: 'image/jpeg',
      title: 'Pic 2',
      description: 'This is another picture.',
      created_at: '2024-01-07T21:32:27.000Z',
    },
    {
      media_id: 17,
      user_id: 2,
      filename: 'https://www.w3schools.com/html/mov_bbb.mp4',
      thumbnail: 'https://picsum.photos/seed/thumb3/320/240',
      filesize: 1236616,
      media_type: 'video/mp4',
      title: 'Bunny',
      description: 'Butterflies fly around the bunny.',
      created_at: '2024-01-07T20:48:13.000Z',
    },
  ];

  return (
    <>
      <h2>My Media</h2>

      <table>
        <thead>
          <tr>
            <th>Thumbnail</th>
            <th>Title</th>
            <th>Description</th>
            <th>Created</th>
            <th>Size</th>
            <th>Type</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {mediaArray.map((item) => (
            <MediaRow key={item.media_id} item={item} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Home;
