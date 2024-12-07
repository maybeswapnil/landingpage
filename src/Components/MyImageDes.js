
import './ImageForm.scss';

function MyImageDes() {

    return (
        <div className="main-form">
            <div class="achievement" id='random-sentence' style={{ color: 'black', fontSize: "1.8vh", width:"80%"}}>
                <h3>Senior Software Engineer I</h3>
                <p><strong>CaratLane ( A Titan Product ), Bangalore, Karnataka</strong></p>
                <p>July 2022 – Current</p>
                <ul>
                    <li>Worked on @caratlane/sqc opensource package & Optimized DB queries and overall architecture to accommodate increased traffic.</li>
                    <li>Reduced the storage cost by 80% by making the product image architecture serverless with S3 and Lambda.</li>
                    <li>Wrote node packages to speed up S3 interaction. Node package performance improved by 50% compared to existing packages.</li>
                    <li>Wrote a worker pool in GoLang that reduced the cross-account SQL migration time from 40 min to 15 min.</li>
                    <li>Reduced the image upload time by 20% with the new serverless implementation.</li>
                </ul>
            </div>
            <br />
        </div>
    );
}

export default MyImageDes;


