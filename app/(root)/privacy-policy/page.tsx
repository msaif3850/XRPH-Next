import Placeholder from "@/components/layout/Placeholder";
import React from "react";
import { Metadata } from "next";
export const generateMetadata = (): Metadata => {
    return {
        title: "Privacy Policy",
        description: "Read our Privacy Policy to understand how XRP Healthcare collects, uses, and protects your personal information. Your privacy is our priority.",
        alternates: { canonical: "https://www.xrphealthcare.ai/privacy-policy" },
    };
};

export default function PrivacyPolicyPage() {
    return (
        <>
            <Placeholder title={'XRPH Privacy Policy'} key={'faq'} description={''}/>
            <div className="px-6 mx-auto max-w-screen-lg">
                <div className="">
                    <p>At www.xrphealthcare.ai, accessible from https<span className="font-sans">://</span>www.xrphealthcare.ai,
                        one of our main priorities is the privacy of our visitors. This Privacy Policy document contains
                        types of information that is collected and recorded by www.xrphealthcare.ai and how we use it.
                        <br/><br/>If you have additional questions or require more information about our Privacy Policy,
                        do not hesitate to contact us.
                        <br/><br/>This Privacy Policy applies only to our online activities and is valid for visitors to
                        our website with regards to the information that they shared and ⁄ or collect in www.xrphealthcare.ai. This
                        policy is not applicable to any information collected offline or via channels other than this
                        website.
                    </p>
                    <h3 className="text-xl font-bold mt-4">Consent</h3>
                    <p>By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>
                    <h3 className="text-xl font-bold mt-4">Information we collect</h3>
                    <p>The personal information that you are asked to provide, and the reasons why you are asked to
                        provide
                        it, will be made clear to you at the point we ask you to provide your personal information.
                        <br/><br/>If you contact us directly, we may receive additional information about you such as
                        your
                        name, email
                        address, phone number, the contents of the message and ⁄ or attachments you may send us, and any
                        other
                        information you may choose to provide.
                        <br/><br/>When you register for an Account, we may ask for your contact information, including
                        items
                        such as
                        name, company name, address, email address, and telephone number.
                    </p>
                    <h3 className="text-xl font-bold mt-4">How we use your information</h3>
                    <p>We use the information we collect in various ways, including to:</p>
                    <ul className="list-disc ml-5 my-3">
                        <li>Provide, operate, and maintain our website</li>
                        <li>Improve, personalize, and expand our website</li>
                        <li>Understand and analyze how you use our website</li>
                        <li>Develop new products, services, features, and functionality</li>
                        <li>Communicate with you, either directly or through one of our partners, including for customer
                            service, to provide you with updates and other information relating to the website, and for
                            marketing and promotional purposes
                        </li>
                        <li>Send you emails</li>
                        <li>Find and prevent fraud</li>
                    </ul>
                    <h3 className="text-xl font-bold mt-4">Log Files</h3>
                    <p>www.xrphealthcare.ai follows a standard procedure of using log files. These files log visitors
                        when
                        they visit websites. All hosting companies do this and a part of hosting services<span
                            className="font-sans">&apos;</span> analytics. The
                        information collected by log files include internet protocol ❲IP❳ addresses, browser
                        type, Internet
                        Service Provider ❲ISP❳, date and time stamp, referring ⁄ exit pages, and possibly the
                        number of
                        clicks. These are not linked to any information that is personally identifiable. The purpose of
                        the
                        information is for analyzing trends, administering the site, tracking users<span
                            className="font-sans">&apos;</span> movement on the
                        website, and gathering demographic information.</p>
                    <h3 className="text-xl font-bold mt-4">Cookies and Web Beacons</h3>
                    <p>Like any other website, www.xrphealthcare.ai uses <span className="font-sans">&apos;</span>cookies<span
                        className="font-sans">&apos;</span>. These cookies are used to store
                        information including visitors<span className="font-sans">&apos;</span> preferences, and the pages on
                        the
                        website that the visitor accessed
                        or visited. The information is used to optimize the users<span className="font-sans">&apos;</span> experience
                        by customizing our web page
                        content based on visitors<span className="font-sans">&apos;</span> browser type and ⁄ or other
                        information.</p>
                    <h3 className="text-xl font-bold mt-4">Advertising Partners Privacy Policies</h3>
                    <p>You may consult this list to find the Privacy Policy for each of the advertising partners of
                        www.xrphealthcare.ai.
                        <br/><br/>third–party ad servers or ad networks uses technologies like cookies, JavaScript, or
                        Web
                        Beacons
                        that are used in their respective advertisements and links that appear on www.xrphealthcare.ai,
                        which are sent directly to users<span className="font-sans">&apos;</span> browser. They automatically
                        receive
                        your IP address when this
                        occurs. These technologies are used to measure the effectiveness of their advertising campaigns
                        and ⁄ or to personalize the advertising content that you see on websites that you visit.
                        <br/><br/>Note that www.xrphealthcare.ai has no access to or control over these cookies that are
                        used
                        by
                        third–party advertisers.
                    </p>
                    <h3 className="text-xl font-bold mt-4">Third Party Privacy Policies</h3>
                    <p>www.xrphealthcare.ai<span className="font-sans">&apos;</span>s Privacy Policy does not apply to other
                        advertisers or websites. Thus, we are
                        advising you to consult the respective Privacy Policies of these third–party ad servers for more
                        detailed information. It may include their practices and instructions about how to opt–out of
                        certain options.
                        <br/><br/>You can choose to disable cookies through your individual browser options. To know
                        more
                        detailed
                        information about cookie management with specific web browsers, it can be found at the
                        browsers<span className="font-sans">&apos;</span>
                        respective websites.
                    </p>
                    <h3 className="text-xl font-bold mt-4">CCPA Privacy Rights ❲Do Not Sell My Personal Information❳</h3>
                    <p>Under the CCPA, among other rights, California consumers have the right to:
                        <br/><br/>Request that a business that collects a consumer<span className="font-sans">&apos;</span>s
                        personal
                        data disclose the categories and
                        specific pieces of personal data that a business has collected about consumers.
                        <br/><br/>Request that a business delete any personal data about the consumer that a business
                        has
                        collected.
                        Request that a business that sells a consumer<span className="font-sans">&apos;</span>s personal
                        data,
                        not sell
                        the consumer<span className="font-sans">&apos;</span>s personal
                        data.<br/><br/>If you make a request, we have one month to respond to you. If you would like to
                        exercise any of
                        these rights, please contact us.
                    </p>
                    <h3 className="text-xl font-bold mt-4">GDPR Data Protection Rights</h3>
                    <p>We would like to make sure you are fully aware of all of your data protection rights. Every user
                        is
                        entitled to the following:
                        <br/><br/>The right to access – You have the right to request copies of your personal data. We
                        may
                        charge you
                        a small fee for this service.
                        <br/><br/>The right to rectification – You have the right to request that we correct any
                        information
                        you
                        believe is inaccurate. You also have the right to request that we complete the information you
                        believe is incomplete.
                        <br/><br/>The right to erasure – You have the right to request that we erase your personal data,
                        under
                        certain
                        conditions.
                        <br/><br/>The right to restrict processing – You have the right to request that we restrict the
                        processing of
                        your personal data, under certain conditions.
                        <br/><br/>The right to object to processing – You have the right to object to our processing of
                        your
                        personal
                        data, under certain conditions.
                        <br/><br/>The right to data portability – You have the right to request that we transfer the
                        data that
                        we have
                        collected to another organization, or directly to you, under certain conditions.
                        <br/><br/>If you make a request, we have one month to respond to you. If you would like to
                        exercise
                        any of
                        these rights, please contact us.
                    </p>
                    <h3 className="text-xl font-bold mt-4">Children<span className="font-sans">&apos;</span>s Information</h3>
                    <p>Another part of our priority is adding protection for children while using the internet. We
                        encourage
                        parents and guardians to observe, participate in, and ⁄ or monitor and guide their online
                        activity.
                        www.xrphealthcare.ai does not knowingly collect any Personal Identifiable Information from
                        children
                        under the age of 13. If you think that your child provided this kind of information on our
                        website,
                        we strongly encourage you to contact us immediately and we will do our best efforts to promptly
                        remove such information from our records.
                    </p>
                </div>
            </div>
        </>
    )
}