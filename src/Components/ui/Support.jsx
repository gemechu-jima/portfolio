import Model from "./Model";

function Support({ onClick }) {
  return (
    <Model onClick={onClick}>
      <div className=" flex h-full w-full flex-col items-center  overflow-scroll">
    <pre className="whitespace-pre">
  <h1 className="mb-6 mt-6 text-2xl font-bold">
    Support Area I Participate
  </h1>
  
  <strong className="mb-4 block">IT Support & Systems Administration</strong>

  <div className="mb-4">
    <span className="font-semibold">1. Operating Systems Installation & Support</span>
    <p className="mt-2">
      I have hands-on experience in installing, configuring, and maintaining various 
      operating systems, including Linux, Windows, and Ubuntu. Over the past year, <br/>
      I have actively worked with both Linux and Windows, providing technical support 
      and troubleshooting for both my current and previous workplaces.
    </p>
    <ul className="mt-2 list-disc pl-6">
      <li>Installing and upgrading OS versions across different machines</li>
      <li>Configuring user accounts, permissions, and security settings</li>
      <li>Managing system updates and ensuring software compatibility</li>
      <li>Resolving OS-related issues to optimize performance and usability</li>
    </ul>
  </div>

  <div className="mb-4">
    <span className="font-semibold">2. Basic Networking Configuration</span>
    <p className="mt-2">
      I have a solid understanding of fundamental networking principles and configurations.
    </p>
    <ul className="mt-2 list-disc pl-6">
      <li>Setting up and configuring routers and switches for efficient data flow</li>
      <li>Assigning IP addresses and troubleshooting connectivity issues</li>
      <li>Managing local networks and ensuring secure communication between devices</li>
      <li>Configuring firewall settings to enhance security</li>
    </ul>
  </div>
  <div className="mb-4">
    <span className="font-semibold">3. Hardware Troubleshooting & Maintenance</span>
    <p className="mt-2">
      I am proficient in diagnosing and resolving hardware-related issues, ensuring optimal performance for IT infrastructure.
    </p>
    <ul className="mt-2 list-disc pl-6">
      <li>Memory (RAM) issues, including installation and performance optimization</li>
      <li>Hard disk configuration, partitioning, and data recovery</li>
      <li>CPU diagnostics, heat management, and performance tuning</li>
      <li>Peripheral devices such as printers, external drives, and input/output devices</li>
      <li>Identifying faulty hardware components and recommending replacements</li>
    </ul>
    </div>
    <div className="mb-4">
    <span className="font-semibold">4. Software Management & IT Applications</span>
    <p className="mt-2">
      I have extensive experience working with various software solutions within IT environments.
    </p>
    <ul className="mt-2 list-disc pl-6">
      <li>Installing, configuring, and troubleshooting Microsoft Office applications such as Word, Excel, PowerPoint, and Outlook</li>
      <li>Managing enterprise applications for productivity and collaboration</li>
      <li>Ensuring software compliance and maintaining licensing requirements</li>
      <li>Supporting users with software-related issues and training them on best practices</li>
      <li>Conducting software updates and ensuring seamless integration with existing systems</li>
    </ul>
    </div>
    <div className="mb-4">
    <span className="font-semibold">5. IT Support & Technical Assistance</span>
    <p className="mt-2">
      In my role, I have provided IT support, assisting teams with various technical challenges.
      </p>
    <ul className="mt-2 list-disc pl-6">
      <li>Delivering timely and effective solutions to technical issues</li>
      <li>Educating users on IT best practices and system usage</li>
      <li>Ensuring system security through regular audits and maintenance</li>
      <li>Collaborating with teams to optimize technology for business needs</li>
      <li>Providing documentation and guides for common troubleshooting processes</li>
    </ul>
    </div>
    <hr/>

</pre>
      </div>
    </Model>
  );
}
export default Support;
