import React from 'react'
import './TableStyles.css'

const Table = () => {
  const openVideo = (videoId) => {
    window.open(`https://www.youtube.com/watch?v=${videoId}`)
  }
  return (
    <div>
      <table class="table">
        <thead>
            <tr>
                <th>#</th>
                <th>Title</th>
                <th>Artist(s)</th>
                <th>Date Created</th>
                <th>Duration</th>
            </tr>
        </thead>
        <tbody>
            <tr class="table-row" onClick={() => openVideo('2-V_NU4KwEk&list=PLXnw2O7OEqFYx92d9rv2D_x5__YOoC-Rt&index=5&ab_channel=DougWallacePercussion')}>
            <td>1</td><td>Symphonie Fantastique, Op. 14: IV. March to the Scaffold (Hector Berlioz)</td>
            <td>American Youth Philharmonic</td><td>Jul 3, 2021</td><td>8:16</td></tr>
            <tr class="table-row" onClick={() => openVideo('PTK-DRgaxBg&ab_channel=AYPO')}>
            <td>2</td><td>Sibelius: Violin Concerto in D minor, Op. 47</td>
            <td>American Youth Philharmonic & Brian Hong</td><td>May 4, 2020</td><td>33:26</td></tr>
            <tr class="table-row" onClick={() => openVideo('2nyxlMc-nvs&ab_channel=HyeyunJeong')}>
            <td>3</td><td>P. I. Tchaikovsky: Violin Concerto in D major, Op. 35</td>
            <td>Hyeyun Jeong</td><td>Nov 1, 2020.</td><td>5:49</td></tr>
            <tr class="table-row" onClick={() => openVideo('2RASLU_7aSY&ab_channel=HyeyunJeong')}>
            <td>4</td><td>Jules Massenet: Meditation de "Thais" for Violin</td>
            <td>Hyeyun Jeong</td><td>Nov 1, 2020</td><td>4:21</td></tr>
            <tr class="table-row" onClick={() => openVideo('Z9HxVyofuko&ab_channel=JiinJeong')}>
            <td>5</td><td>Feliz Navidad (2019 Christmas)</td><td>Jeong Sisters</td><td>Dec 25, 2019</td><td>1:17</td></tr>
            <tr class="table-row" onClick={() => openVideo('xIJhSKmbzNU&ab_channel=JiinJeong')}>
            <td>6</td><td>Where Are You Christmas (2019 Christmas)</td><td>Jeong Sisters</td><td>Dec 25, 2019</td><td>4:01</td></tr>
            <tr class="table-row" onClick={() => openVideo('O27UpqNX4mQ&ab_channel=JiinJeong')}>
            <td>7</td><td>All I Want for Christmas is You (2018 Christmas)</td><td>Jeong Sisters</td><td>Dec 25, 2018</td><td>3:47</td></tr>
            <tr class="table-row" onClick={() => openVideo('EBknMCeMD-Y&ab_channel=JiinJeong')}>
            <td>8</td><td>Christmas Medley Duet (2018 Christmas)</td><td>Jeong Sisters</td><td>Dec 25, 2018</td><td>2:35</td></tr>
        </tbody>
    </table>
    </div>
  )
}

export default Table
