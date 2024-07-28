import "../styles/Donate.css";
import QR from '../../src/assets/Sample.png'

 const Donate = () => {
    const Names = [
        "Arjun Reddy",
        "Priya Sharma",
        "Rajesh Kumar",
        "Sneha Patil"
    ];
    const donationAmounts = [
        5000,
        12000,
        7500,
        30000
    ];
    const donationReasons = [
        "Supporting dental health awareness programs",
        "Upgrading dental equipment and facilities",
        "Providing free dental check-ups and treatments for underprivileged communities",
        "Funding research and development in dental health"
    ];
    const avatarUrls = [
        "https://cdn.pixabay.com/photo/2024/03/31/05/00/ai-generated-8665996_1280.jpg",
        "https://randomuser.me/api/portraits/women/70.jpg",
        "https://cdn.pixabay.com/photo/2023/05/27/08/04/ai-generated-8021008_640.jpg",
        "https://randomuser.me/api/portraits/women/76.jpg"
    ];
      
    return (
        <div>
            <div >
               
               
            </div>
            <div className="payment">
                
                <div>
                    <img src={QR} alt="QR" />
                    <p>Scan to pay</p>
                </div>
                <button>Donate</button>
            </div>
            <div className="recent-donors">
                <h2>Our Helping Hands </h2>
                <div className="card-container">
                    {Names.map((name, index) => (
                        <div className="card" key={index}>
                            <img src={avatarUrls[index]} alt={name} />
                            <p className="name">{name}</p>
                            <p className="time">Recently</p>
                            <p className="amount">
                                Donated ₹<span>{donationAmounts[index].toLocaleString()}</span>
                            </p>
                            <p className="reason">For: {donationReasons[index]}</p>
                        </div>
                    ))}
                </div>
            </div>
            
        </div>
    );
};

export default Donate;