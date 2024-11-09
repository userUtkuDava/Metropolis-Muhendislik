import React, { useState } from 'react';
import './styles.scss/contact.scss';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [visibility, setVisibility] = useState('d-none');
    const [formData, setFormData] = useState({
        from_name: '',
        email: '',
        konu: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    // Form verisini güncelleme
    const handleChange = (e) => {
        const { name, value } = e.target; // 'name' özelliğini kullanarak
        setFormData(prevData => ({
            ...prevData,
            [name]: value // Dinamik olarak formData'yı güncelle
        }));
    };

    // Formu gönderme
    const handleSubmit = (e) => {
        e.preventDefault();

        // EmailJS ile e-posta gönder
        emailjs.sendForm(
            'service_hq17cai',  // EmailJS servis ID'nizi buraya yazın
            'template_8149fvq',  // EmailJS şablon ID'nizi buraya yazın
            e.target,
            'GxNjrXGnfyQOvCuVO'  // EmailJS kullanıcı ID'nizi buraya yazın
        )
            .then((result) => {
                setStatus('Mesajınız başarıyla gönderildi!');
                setFormData({ from_name: '', email: '', konu: '', message: '' });
                setVisibility('visibility')
                document.getElementById('alertMessage').innerHTML = `
                 <div className="flex flex-column items-center">
                    <p>İletiniz Alındı Kısa Sürede Geri Dönüş Yapılacaktır.</p>
                 </div>
                `
                setTimeout(() => {
                    setVisibility('d-none')
                }, 10000); // 3 saniye bekler
            }, (error) => {
                setStatus('Bir hata oluştu.');
            });
    };

    return (
        <section id='iletisim' className='container contact-container' >
            <div className='title'>
                <h1 className='page-title'>
                    Bizimle İletişime Geçin
                </h1>
                <p className='col-8 title-description'>
                    Elektrik mühendisliği alanında uzman kadromuzla size en iyi hizmeti sunmak için buradayız. Sorularınız, projeleriniz veya işbirlikleri için bizimle iletişime geçmekten çekinmeyin.
                    Sizinle çalışmayı dört gözle bekliyoruz!
                </p>
            </div>

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <div className="wrapper">
                            <div className="row mb-5">
                                {/* İletişim Bilgileri */}
                                <div className="col-md-3">
                                    <div className="dbox w-100 text-center">
                                        <div className="icon d-flex align-items-center justify-content-center">
                                            <span className="bi bi-geo-alt"></span>
                                        </div>
                                        <div className="text">
                                            <p><span>Adres:</span> 198 West 21th Street, Suite 721 New York NY 10016</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="dbox w-100 text-center">
                                        <div className="icon d-flex align-items-center justify-content-center">
                                            <span className="bi bi-phone"></span>
                                        </div>
                                        <div className="text">
                                            <p><span>Telefon:</span> <a href="tel:+905313606980">+0531 360 6980</a></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="dbox w-100 text-center">
                                        <div className="icon d-flex align-items-center justify-content-center">
                                            <span className="bi bi-envelope"></span>
                                        </div>
                                        <div className="text">
                                            <p><span>Email:</span> <a href="mailto:yetkilielektrik.com" target='_blank'>yetkilielektrik.com</a></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="dbox w-100 text-center">
                                        <div className="icon d-flex align-items-center justify-content-center">
                                            <span className="bi bi-whatsapp"></span>
                                        </div>
                                        <div className="text">
                                            <p><span>Whatsapp:</span><a href="https://wa.me/905313606980" target='_blank'> Whatsapp'dan İlet</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row no-gutters">
                                <div className="col-md-7">
                                    <div className="contact-wrap w-100 p-md-5 p-4">
                                        <h3 className="mb-4">Mesajını İlet</h3>
                                        <form id="email-form" onSubmit={handleSubmit}>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label className="label" htmlFor="name">İsim</label>
                                                        <input
                                                            className='form-control'
                                                            onChange={handleChange}
                                                            type="text"
                                                            name="from_name"
                                                            id="from_name"
                                                            placeholder="Adınız"
                                                            value={formData.from_name} // Form verisini burada bağla
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label className="label" htmlFor="email">Email Adresi</label>
                                                        <input
                                                            className='form-control'
                                                            onChange={handleChange}
                                                            type="email"
                                                            name="email"
                                                            id="email"
                                                            placeholder="E-posta"
                                                            value={formData.email} // Form verisini burada bağla
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label className="label" htmlFor="subject">Konu</label>
                                                        <input
                                                            className='form-control'
                                                            onChange={handleChange}
                                                            type="text"
                                                            name="konu"
                                                            id="konu"
                                                            placeholder="Açıklama"
                                                            value={formData.konu} // Form verisini burada bağla
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label className="label" htmlFor="message">İleti</label>
                                                        <textarea
                                                            name="message"
                                                            onChange={handleChange}
                                                            className="form-control"
                                                            id="message"
                                                            cols="30"
                                                            rows="4"
                                                            placeholder="Mesajınızı Giriniz"
                                                            value={formData.message} // Form verisini burada bağla
                                                        ></textarea>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <button className="btn btn-primary" type="submit">Gönder</button>
                                                        <p id='alertMessage' className={`${visibility} text-yellow-700 font-medium text-base bg-gray-200 text-center p-3 rounded mb-4 shadow-sm`}></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                                {/* Google Map iframe */}
                                <div className="col-md-5 d-flex align-items-stretch">
                                    <iframe src="https://www.google.com/maps/embed?pb=..." width="600" height="450" allowfullscreen="" loading="lazy"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
