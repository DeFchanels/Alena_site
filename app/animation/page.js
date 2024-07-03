
import { Video } from "../components/Video/Video";


export default function AnimationPage() {
  return (
    <>
      <h1 id='animation_header'>Animation showreel</h1>
      <Video path="video/Showreel.mp4" clas="central-video" poster='posters/1_poster.png'/>
      <h1 id='animation_header2'>Short Films</h1>
      <div className='right_animation'>
        <Video path="video/Smoke without fire.mp4" clas="video" poster='posters/2_poster.png'/>
        <div className='right_description'>
          <h1 className='description_head'>Smoke Without Fire</h1>
          <p className='description_text'>Short film about two entities living in the same apartment.</p>
          <p className='description_text'>Created in a group with two other students)</p>
        </div>
      </div>
      <div className='left_animation'>
        <div className='left_description'>
          <h1 className='description_head'>Hide and seek</h1>
          <p className='description_text'>Animated clip for элли на маковом поле to the song "Прятки" (Hide-and-Seek)</p>
        </div>
        <Video path="video/Hide and seek.mp4" clas="video" poster='posters/3_poster.png'/>
      </div>
      <div className='right_animation'>
        <Video path="video/Homo comfortus.mp4" clas="video" poster='posters/4_poster.png'/>
        <div className='right_description'>
          <h1 className='description_head'>Homo Comfortus</h1>
          <p className='description_text'>Short film about the struggles of trying to appease everyone around you</p>
        </div>
      </div>
      <div className='left_animation'>
        <div className='left_description'>
          <h1 className='description_head'>Murena Nastya</h1>
          <p className='description_text'>Two short stories about the lovable murena-mascot of the shopping mall Aviapark in collaboration with her Telegram channel.</p>
        </div>
        <Video path="video/Murena Nastya 1.mp4" clas="video" poster='posters/5_poster.png'/>
        <Video path="video/Murena Nastya 2.mp4" clas="second_video" poster='posters/6_poster.png'/>
      </div>
      <h1 id='animation_header3'>Other works</h1>
      <Video path="video/Other 1.mp4" clas="central-video" poster='posters/7_poster.png'/>
      <Video path="video/Other 2.mp4" clas="central-video" poster='posters/8_poster.png'/>
      <Video path="video/Other 3.mp4" clas="central-video" poster='posters/9_poster.png'/>
      
    </>
  );
}
