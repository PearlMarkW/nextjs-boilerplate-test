// pages/consulting.tsx

export default function Consulting() {
    return (
        <div style={{ paddingTop: '60px' }}>

            <section class="flex flex-col lg:flex-row items-center justify-between p-8 h-128">
                <div class="lg:w-1/2 p-6">
                    <h2 class="text-3xl mb-6">Our Vision</h2>
                    <p class="mt-6 text-xl">Wise Strategies, LLC was founded to provide an alternative to traditional strategy consulting firms for both clients and consulting professionals. Our vision is to deliver superior levels of service, strategic recommendations, and achievable implementation, while enabling team members to maintain healthy personal lives and continue their professional development.</p>
                    <p class="mt-1 text-xl">Our team of US and international professionals bring quantitative rigor, advanced technical competencies, and practical experience together to deliver tailored solutions facing our partners’ businesses. Teamwork is key, and ensuring our partners and management professionals work together to deliver value is our top priority.</p>
                    <p class="mt-1 text-xl">-</p>
                    <p class="mt-1 text-xl">Mark Wise, CEO & Founder</p>
                </div>
                <div class="lg:w-1/2 flex justify-center items-center">
                    <img src="/images/rugby.jpg" alt="Differentiation" class="w-auto h-auto max-w-full max-h-[600px]" />
                </div>
            </section>

            <section class="flex flex-col lg:flex-row items-center justify-between p-8 h-128">
                <div class="lg:w-full p-6">
                    <h2 class="text-3xl mb-6">Our Approach</h2>
                    <p class="mt-6 text-xl">Wise Strategies, LLC supports businesses with strategic recommendations driven by rigorous quantitative and qualitative analysis. We leverage structured problem solving and data analysis to ensure credible recommendations and results. Our close collaboration with clients ensures existing business practices are accurately reflected and understood during problem solving to inform implementation planning and execution.</p>
                </div>
            </section>

            <section class="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
                <div class="text-center">
                    <img src="/images/woods.jpg" alt="Strategy" class="mx-auto mb-4 w-48 h-48 object-cover rounded-full" />
                    <h3 class="text-2xl font-bold">Strategy Development</h3>
                    <p class="text-lg">Evaluate and determine the optimal strategic path forward for your business in a dynamic market.</p>
                </div>
                <div class="text-center">
                    <img src="/images/analytics.jpg" alt="Analytics" class="mx-auto mb-4 w-48 h-48 object-cover rounded-full" />
                    <h3 class="text-2xl font-bold">Analytics</h3>
                    <p class="text-lg">Maximize use of your organizations data, exploiting new technologies and software to transform dispersed information into actionable intelligence.</p>
                </div>
                <div class="text-center">
                    <img src="/images/coding.jpg" alt="Implementation" class="mx-auto mb-4 w-48 h-48 object-cover rounded-full" />
                    <h3 class="text-2xl font-bold">Implementation</h3>
                    <p class="text-lg">Act and effect change to capture savings, develop opportunities, and create value.</p>
                </div>
                </section>

                <section class="flex flex-col lg:flex-row items-center justify-between p-8 h-128">
                    <div class="lg:w-1/2 p-20">
                        <h2 class="text-3xl mb-6 font-bold">SDVOSB Certified</h2>
                    </div>
                    <div class="lg:w-1/2 flex justify-center items-center">
                        <img src="/images/sdvosb.png" alt="SDVOSB" class="w-auto h-auto max-w-full max-h-[200px]" />
                    </div>
                </section>

        </div>
    );
  }
  