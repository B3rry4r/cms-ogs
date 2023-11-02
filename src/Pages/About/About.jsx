import React from 'react';
import './About.scss';
import Logo from '../../Assets/logo.png';
import CarouselMarquee from '../../Components/Marquee/Marquee';
import { slides } from '../../Components/ImageData/ImageData';

const About = () => {
    return (
        <div className='about'>
            <div className="a-header">
                <div className="content">
                    <h1>The Old Grammarians Society (OGS)</h1>
                    <p>The Old Grammarians Society (OGS) of CMS Grammar School is a renowned association of alumni committed to upholding the rich heritage and values of our esteemed institution. Founded in 1859, we have a proud history of fostering academic excellence, camaraderie, and a spirit of lifelong learning among our members.</p>
                    <div className="arrow-down" />
                </div>
            </div>

            <div className="hall-of-fame">
                    <div className="filtered circle-1"></div>
                    <div className="filtered circle-2"></div>
                    <div className="filtered circle-3"></div>
                    <div className="filtered circle-4"></div>

                    <div className="hof-overlay">
                        <div className="text">
                            <h1>Hall Of Fame</h1>
                        </div>
                        <div className="marquee-container">
                            {/* <CarouselMarquee imageUrls={slides}  /> */}
                            <CarouselMarquee imageUrls={slides} rotationAngle={"0px"} />
                        </div>

                        <div className="text">
                            <p>The OGS Hall of Fame commemorates exceptional Old Grammarians whose positive contributions have left an enduring mark on the world stage. Click 'Details' on each portrait to explore our esteemed Hall of Famers</p>
                        </div>
                    </div>
                </div>

            <div className="ogs-history">
                <h1>History of CMS Grammar School</h1>
                <div className="logo">
                    <img src={Logo} alt="logo" />
                    <p>Founded June 6, 1859</p>
                </div>

                <p>CMS Grammar School, Lagos, the oldest grammar school in Nigeria, was founded on 6th June, 1859, by the Church Missionary Society (CMS), as a boarding school for boys. The first Anglican Missionaries, who had arrived in Lagos, from Sierra Leone, in 1842, and had established the Yoruba Mision, soon realised the need for a good Secondary school for their missionary work in Lagos. Members of the Yoruba Mission founded the School with, the primary aim of offering  boys an opportunity of having secondary education, which was not then available in Lagos. Some local merchants and traders also contributed funds towards the setting up of the school. The CMS Grammar School in Freetown, Sierra Leone, had been founded a few years earlier.

                    The School started with only six pupils, all boarders, in a small single-story building, the eCotton Housel at Broad Street, the present site of Hallmark Bank: (UTC) Building. For decades after it was founded, it was the only secondary school that offered boys training as future leaders of Nigeria.

                    Until recently, most of the Anglican Clergy in Nigeria were products of the CMS Grammar School, as were the early administrators. Though a Mission school, it does not discriminate in its admissions, boys from different religious backgrounds were offered admission into the school through an entrance examination.

                    Later, after a British colony was established in Lagos in 1861, the British colonial authorities recruited most of their indegenous clerical and technical staffers from the School. Among them were Dr. Henry Carr, the first African Inspector of Education and, later, Administrator-General of Lagos Colony, and Herbert Macaulay, who later trained as Surveyor. From its inception, the School’s motto has been Nisi Dominus Frustrai, extracted from Psalm 127, meaning without God we labour in vain, which enshrined the faith of the founding fathers, and the tradition of the school.

                    The first Principal of the school, often referred to as its Founder, was the Revd Thomas Babington Macaulay, the father of the great Nigerian Nationalist, Herbert Heelas Macaulay. As a young lad, he had been taken from Fourah Bay College, Freetown, Sierra Leone, and sent to England for training as an Anglican Priest at the CMS Training College, at Islington and later at King’s College, University of London, from where he obtained a Bachelors Degree in Arts. On completion of his training in London, he was sent to Lagos in 1852 as an Anglican Missionary from where he was posted to the Anglican Training Institute at Ikija, Abeokuta. There, his superientendent, the Revd. Henry Townsend, noted that his considerable talents could be put to

                    better use as a schoolmaster. After six frustrating years at Ikija, he found his way back to Lagos and took the lead in plans for the founding of the School. It was he who laid the early traditions of the School, having

                    been its Principal from 1859 until his death in 1879, a total of twenty years. He developed the CMS Grammar School into a famous school, and was reputed to be a stern disciplinarian determined to instil moral discipline in the boys under his charge.

                    From the start, he made it his priority to assist the boys in the development of their character and to prepare them for public service. This has remained the tradition of the School. Later, the School moved down the road from its Cotton Housel site at Broad Street, to more spacious accommodation, at the junction of Broad Street and Odunlami Street, now the remises of the Lagos Central Library, and NITEL. It was on the new site that the first school Science laboratory was built in 1929, together with the Assembly Hall, the Principali’s Lodge, and a dining room for the boarders. All these took place after St. Peters Church had moved from Odunlami Street to its present site at Faji in 1881. It was what enabled CMS Grammar School to move from the Cotton house.

                    The school has been fortunate in having a succession of dedicated and diligent Principals who have continued to maintain its excellent academic traditions and moral discipline. Among the were the Revd. (Later Bishop) Isaac Oluwole, the third Principal, who headed the school from 1881-1893. His grandson, the Very Revd. T. A. J Oluwole, an old boy, retired recently as the Provost of the Cathedral Church of Christ, Lagos, with which the School has always had strong connections. His predecessor as acting Principal, from 1879 to 1881, was Archdeacon Henry Johnson. In 1896, the Revd. Joseph Suberu Fanimokun took over the School as Principal until 1914, in which year Nigeria became a British Protectorate after its amalgamation. In 1909, fifty years after the founding of the School, the first state secondary school, King’s College, Lagos, was established by the colonial administrator, with most of its foundation students drawn from the CMS Grammar School. The Revd. Canon (later Professor) EJ. Evans, a Scientist and well -known author of science books for secondary schools, who introduced the teaching of Science in the School, succeeded Revd. Fanimokun as Principal in 1951. It was he who in 1919 composed the songof the School , which was later harmonised by Fela Sowande, an old boy of the school.

                    On leaving the school, Mr. E. J. Evans later became a Professor at the University of London. In 1929, the Revd. F. Watherton took over as Principal. During his tenure, some students’ in the School were successfully presented in 1931 for the new Senior Cambridge Certificate Examinations. The following year the Revd Watherton left the School, following his appointment as Principal of the new Igbobi College, jointly founded by the Anglican and Methodist Missions. The CMS Grammar School again provided Igbobi with some of  pioneer students.

                    The mild-mannered Ven. (Dr.) 1. Olumide Lucas succeeded Revd. Watherton as acting Principal. Ven. J. Olumide Lucas, a great scholar, author, music composer, and theologian, left the School in 1935 on being appointed the Vicar of St. Paulis Church, Bread-fruit. The boarding house has recently been named after him in recognition of his contribution to the School. He was preceded by three expatriates, and was succeeded by another, The Revd. C. G. Throne, who spent a year only as Principal of the School.

                    Mr. LJ. Lewis, a Zoologist, and Senior Science Master from St. Andrews College, Oyo, succeeded Revd. Thome in 1936 as Principal. Mr. Lewis, popularly known by the boys as Jekii maintained strict discipline in the School and won the respect of parents and the public. He did not hesitate to flog errand boys.

                    When a few boys from wealthy families became unruly, he expelled them from the School. It was he who introduced the preparatory class in the School by which boys drawn mainly from CMS Girls School were admitted and prepared for the entrance examination to the School. He left in 1944, and subsequently became a Professor at the Institute of Education in the University London. Such was his commitment to the development of education in Africa that he ended his academic career in the 1980s as the vice chancellor of the University of Zimbabwe.

                    During his tenure as Principal, the teaching of Science in the School flourished so much that Science tutors from the schools came to the CMS Grammar School for further training, and to use its excellent Science Laboratories. Some students came to the School for the preliminary science course, preparatory to entering the Yaba Higher College for the Diploma course in Science. He was ably assisted in the teaching of Science by Mr. C. O. Taiwo (later Professor) and Mr. C. A. Fawole, both of whom had read science at Yaba Higher College. During the World War II in 1942. Those reading Science were evacuated from Yaba Higher College to the CMS Grammar School to complete their diploma course. Mr. Lewis was the last of the great expatriate principals of the School, all of whom left an indelible mark on  the sand of time.

                    The Revd. (Later Bishop) S. O. Odutola succeeded Mr. LJ Lewis in 1944, as acting Principal. It was he who expanded the Science laboratories in the School. He was replaced, as Principal, by Revd (later Bishop) Seth I. Kale, who left in 1949 for St. Andrews College, Oyo, which had been founded in 1896 by the Anglican Mission as a Teacher training college. Under Revd. Kale the teaching of Science in the school continued to flourish with the recruitment of more science teachers and the expansion of Science

                    laboratories in the school. Kale House, one of the houses to which boys in the School are distributed, has been named after him. In 1950 the Revd. Canon (later Archdeacon) B.A. Adelaja, an old boy of the School himself, took over as Principal of the School. He remained Principal for twenty years. When he left in 1970 he had equaled the feat achieved by the first Principal of the School, the Revd. Thomas Babinton Macaulay, who also served for twenty years.

                    It was during the long tenure of Revd. Canon Adelaja as Principal that the school, after years of careful preparation, moved in 1958 to its present site at Bariga, then virtually a virgin land on the outskirts of Lagos. Understandably, many Old Grammarians, who remained sentimentally attached to the old site at Odunlarni, privately expressed their reservations about the School moving to Bariga.

                    In retrospect, the decision to move the School to Bariga was wise and justified, as the old site in Central Lagos had become too small and cramped for the School, which needed new facilities such as good sports arena, and modem science facilities. All of these were accomplisbed at the new site during the tenure of Revd. Canon Adelaja. Known affectionately as Oga by the boys. Revd. Canon Adelaja will always be remembered for his outstanding contributions to the fame and physical development of the School, during his tenure as Principal. It is in recognition of this that the School Hall was posthumously named after him. Happily, Mr. (Later Chief) I. A. Olowu, who had taught in the School for many years under Canon Adelaja, returned as its Principal, who loved the School and the boys. In his 80s now, he has continued, almost without fail, to attend the annual Founders Day Service at the Cathedral. He was a great tutor of Latin and Geography who did not brook any intellectual indolence from the students. He also took a keen interest in the career and progress of the boys after they had left the School. It was during his tenure that the School excelled in sports, winning many national and international laurels.

                    Many of the tutors of the School will always be remembered with affection by the old boys for their immense contributions to the progress and fame of the School. These include Mr. (later Professor) C.O. Taiwo, who joined the School in 1939 as Senior Science Master and later, Master of the Boarding House. It was from the School that he won a government scholarship in 1944 to study Mathematics at Trinity College, Cambridge. In his excellent book Seventy years in the Nigerian Education Systemi he says he had happy reminiscences of the School whose remarkable achievements he is immensely proud. Professor C. O. Taiwo was honoured by OGS in December, 2003, with the award of Honorary Member of the Old Grammarians Society. Others were; Revd. S.R.S. Nicholas, who came from Adisadel College, Cape Coast, Ghana, and who succeeded Mr. Taiwo as Master of Boarding House.

                    Mr. A.O. Ogedengbe, D.O. Fagunwa (the Yoruba Author), J.A.O Odebiyi (later Minister in the Old Western Region and Senator), S.O. Olagbaju (Tutor of Music, and Organist for decades at St. Paulfs Church, Breadfruit) Pa J. A. Adeniji (People Warden at the Cathedral), who taught two generations of Grammarians, Pa. Ogunba, the great Geometry Tutor, and Pa Adeyemi, who did not spare the rod on unruly boys.

                    Regrettably, in 1979 the Lagos State Government, pleading public interest, took over the school, as all other private secondary schools in Lagos. Predictably, under the  government control, the School was badly neglected, and its high academic standards fell. The School’s boarding house was abandoned, its staff quarters acquired by the government, and new state schools were built on its grounds. Student enrolment in the school increased significantly. But owing to lack of funds, the Lagos State Government was not able to maintain the excellent facilities in the School. The Principal! brought in by the Government to run the School were really not committed to the school. They were also constrained by lack of funds.

                    In 2001, under pressure from old boys of the School, and the OGS, it was returned to its owners, the Anglican Diocese, but with out any financial compensation whatever. The agitation for the return of the School to the Anglican Diocese was led by Mr. Akintola Williams, the late ChiefFR.A Williams SAN, Otunba T.O.S. Benson SAN, Maj. General Henry Adefowope, Chief G.O.K. Ajayi SAN, and Ambassador Oladapo Fafowora, among others.

                    Gradually, the facilities in the School are being rehabilitated with the financial support of the old boys. It has now been fenced off completely. Restoring the School to its Old Glory has been a Herculean task; but it is a task that the OGS is determined to complete.

                    Since 1859, when the School was founded, it has made an outstanding contribution to the development of secondary education in Nigeria. It has certainly fulfilled the dreams of its founders by producing some of Nigeria’s great leaders in all  walks of life. This is a legacy of which Old Grammarians will always be proud. It is all owed to its Founder and First Principal, The Revd. Thomas Babington Macaulay.</p>
            </div>
        </div>
    )
}

export default About