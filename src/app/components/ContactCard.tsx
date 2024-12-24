import React from 'react'

function ContactCard() {
	return (
		// Card container with responsive classes
		<div className="contactCard bg-white w-full max-w-screen-xl mx-auto h-auto ">
			{/* Content container with flex */}
			<div className="flex flex-col lg:flex-row justify-start items-start w-full h-auto gap-8 pt-[130px]">
				{/* Emergency buttons container - now fixed to the left */}
				<div className="emergencyBtn flex flex-col gap-4 w-auto justify-start items-start">
					<button className="bg-blue-50 px-6 py-2 rounded-md hover:bg-blue-200 transition">
						Call Kurunegala Hospital
					</button>
					<button className="bg-blue-50 px-6 py-2 rounded-md hover:bg-blue-200 transition">
						Call Emergency Medical Hotline
					</button>
				</div>


				{/* Seek Medical Help section */}
				<div className="seekMedicalHelp flex-grow p-6 bg-white w-full max-w-[633px] h-auto pr-[10%]">
					<h2 className="font-extrabold text-[42px] leading-[54.68px] text-[#484848] pb-[25px]">Seek Medical Help</h2>
					<p className="font-medium text-[24px] leading-[32px] text-[#9E9E9E]">
						Have any questions or need assistance? Reach out to the hospital for
						appointments, consultations, or general inquiries. We're here to help
						you with your rheumatic care needs. Our team is committed to providing
						you with the guidance and support you need.
					</p>
				</div>
			</div>
		</div>
	)
}

export default ContactCard
