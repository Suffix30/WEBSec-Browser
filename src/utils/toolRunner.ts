import { ToolResult } from '../types/tools';

const KALI_TOOL_PATHS = {
  // Web Enumeration
  whatweb: '/usr/bin/whatweb',
  wappalyzer: '/usr/bin/wappalyzer',
  nikto: '/usr/bin/nikto',
  httpprobe: '/usr/bin/httpx',
  aquatone: '/usr/bin/aquatone',
  gobuster: '/usr/bin/gobuster',
  dirsearch: '/usr/bin/dirsearch',
  ffuf: '/usr/bin/ffuf',
  wfuzz: '/usr/bin/wfuzz',
  davtest: '/usr/bin/davtest',
  
  // Network and Port Enumeration
  nmap: '/usr/bin/nmap',
  masscan: '/usr/bin/masscan',
  unicornscan: '/usr/bin/unicornscan',
  netcat: '/usr/bin/nc',
  tcpdump: '/usr/sbin/tcpdump',
  wireshark: '/usr/bin/wireshark',
  
  // Subdomain and DNS Enumeration
  sublist3r: '/usr/bin/sublist3r',
  amass: '/usr/bin/amass',
  assetfinder: '/usr/bin/assetfinder',
  dnsrecon: '/usr/bin/dnsrecon',
  fierce: '/usr/bin/fierce',
  dnsenum: '/usr/bin/dnsenum',
  
  // OS and Network Service Enumeration
  enum4linux: '/usr/bin/enum4linux',
  smbclient: '/usr/bin/smbclient',
  crackmapexec: '/usr/bin/crackmapexec',
  ldapsearch: '/usr/bin/ldapsearch',
  windapsearch: '/usr/bin/windapsearch',
  hydra: '/usr/bin/hydra',
  medusa: '/usr/bin/medusa',
  onesixtyone: '/usr/bin/onesixtyone',
  snmpwalk: '/usr/bin/snmpwalk',
  snmpcheck: '/usr/bin/snmpcheck',
  
  // Cloud and API Enumeration
  cloudbrute: '/usr/bin/cloudbrute',
  awscli: '/usr/bin/aws',
  s3scanner: '/usr/bin/s3scanner',
  arjun: '/usr/bin/arjun',
  paramspider: '/usr/bin/paramspider',
  
  // Application-Level Enumeration
  wpscan: '/usr/bin/wpscan',
  wpseku: '/usr/bin/wpseku',
  cmseek: '/usr/bin/cmseek',
  droopescan: '/usr/bin/droopescan',
  sqlmap: '/usr/bin/sqlmap',
  nosqlmap: '/usr/bin/nosqlmap',
  mongoenum: '/usr/bin/mongoenum',
  
  // Wireless and IoT Enumeration
  airodump: '/usr/sbin/airodump-ng',
  kismet: '/usr/bin/kismet',
  wifite: '/usr/bin/wifite',
  shodan: '/usr/bin/shodan',
  
  // Miscellaneous Enumeration
  theharvester: '/usr/bin/theharvester',
  metasploit: '/usr/bin/msfconsole',
  recon_ng: '/usr/bin/recon-ng',
  spiderfoot: '/usr/bin/spiderfoot'
} as const;

export interface ToolConfig {
  id: string;
  name: string;
  command: string;
  args?: {
    name: string;
    description: string;
    type: 'string' | 'number' | 'boolean';
    default?: string | number | boolean;
    required?: boolean;
  }[];
  parseOutput?: (output: string) => any;
  category: 'web' | 'network' | 'subdomain' | 'service' | 'cloud' | 'application' | 'wireless' | 'misc';
  description: string;
  path?: string;
}

export const tools: Record<string, ToolConfig> = {
  // Web Enumeration Tools
  whatweb: {
    id: 'whatweb',
    name: 'WhatWeb',
    command: '{path} {target} --color=never',
    category: 'web',
    description: 'Web technology fingerprinter',
    path: KALI_TOOL_PATHS.whatweb
  },
  wappalyzer: {
    id: 'wappalyzer',
    name: 'Wappalyzer CLI',
    command: '{path} {target}',
    category: 'web',
    description: 'Technology stack detector',
    path: KALI_TOOL_PATHS.wappalyzer
  },
  nikto: {
    id: 'nikto',
    name: 'Nikto',
    command: '{path} -h {target}',
    category: 'web',
    description: 'Web server vulnerability scanner',
    path: KALI_TOOL_PATHS.nikto
  },
  httpprobe: {
    id: 'httpprobe',
    name: 'HTTProbe',
    command: '{path} {target}',
    category: 'web',
    description: 'HTTP/HTTPS probe',
    path: KALI_TOOL_PATHS.httpprobe
  },
  aquatone: {
    id: 'aquatone',
    name: 'Aquatone',
    command: '{path} -url {target}',
    category: 'web',
    description: 'Visual web reconnaissance',
    path: KALI_TOOL_PATHS.aquatone
  },
  gobuster: {
    id: 'gobuster',
    name: 'Gobuster',
    command: '{path} dir -u {target} -w /usr/share/wordlists/dirb/common.txt',
    category: 'web',
    description: 'Directory/file enumeration',
    path: KALI_TOOL_PATHS.gobuster
  },
  dirsearch: {
    id: 'dirsearch',
    name: 'Dirsearch',
    command: '{path} -u {target}',
    category: 'web',
    description: 'Web path scanner',
    path: KALI_TOOL_PATHS.dirsearch
  },
  ffuf: {
    id: 'ffuf',
    name: 'FFUF',
    command: '{path} -u {target}/FUZZ -w /usr/share/wordlists/dirb/common.txt',
    category: 'web',
    description: 'Fast web fuzzer',
    path: KALI_TOOL_PATHS.ffuf
  },
  wfuzz: {
    id: 'wfuzz',
    name: 'Wfuzz',
    command: '{path} -c -z file,/usr/share/wordlists/dirb/common.txt --hc 404 {target}/FUZZ',
    category: 'web',
    description: 'Web fuzzer',
    path: KALI_TOOL_PATHS.wfuzz
  },
  davtest: {
    id: 'davtest',
    name: 'DAVTest',
    command: '{path} -url {target}',
    category: 'web',
    description: 'WebDAV tester',
    path: KALI_TOOL_PATHS.davtest
  },

  // Network and Port Enumeration Tools
  nmap: {
    id: 'nmap',
    name: 'Nmap',
    command: '{path} -sV {target}',
    category: 'network',
    description: 'Network scanner',
    path: KALI_TOOL_PATHS.nmap
  },
  masscan: {
    id: 'masscan',
    name: 'Masscan',
    command: '{path} -p1-65535 {target}',
    category: 'network',
    description: 'Mass IP port scanner',
    path: KALI_TOOL_PATHS.masscan
  },
  unicornscan: {
    id: 'unicornscan',
    name: 'Unicornscan',
    command: '{path} {target}',
    category: 'network',
    description: 'TCP/UDP port scanner',
    path: KALI_TOOL_PATHS.unicornscan
  },
  netcat: {
    id: 'netcat',
    name: 'Netcat',
    command: '{path} -zv {target} 1-1000',
    category: 'network',
    description: 'TCP/UDP swiss army knife',
    path: KALI_TOOL_PATHS.netcat
  },
  tcpdump: {
    id: 'tcpdump',
    name: 'TCPDump',
    command: '{path} -i any host {target}',
    category: 'network',
    description: 'Network packet analyzer',
    path: KALI_TOOL_PATHS.tcpdump
  },

  // Subdomain and DNS Enumeration Tools
  sublist3r: {
    id: 'sublist3r',
    name: 'Sublist3r',
    command: '{path} -d {target}',
    category: 'subdomain',
    description: 'Subdomain enumerator',
    path: KALI_TOOL_PATHS.sublist3r
  },
  amass: {
    id: 'amass',
    name: 'Amass',
    command: '{path} enum -d {target}',
    category: 'subdomain',
    description: 'Network mapping tool',
    path: KALI_TOOL_PATHS.amass
  },
  assetfinder: {
    id: 'assetfinder',
    name: 'Assetfinder',
    command: '{path} {target}',
    category: 'subdomain',
    description: 'Domain asset finder',
    path: KALI_TOOL_PATHS.assetfinder
  },
  dnsrecon: {
    id: 'dnsrecon',
    name: 'DNSRecon',
    command: '{path} -d {target}',
    category: 'subdomain',
    description: 'DNS enumeration script',
    path: KALI_TOOL_PATHS.dnsrecon
  },
  fierce: {
    id: 'fierce',
    name: 'Fierce',
    command: '{path} --domain {target}',
    category: 'subdomain',
    description: 'DNS reconnaissance tool',
    path: KALI_TOOL_PATHS.fierce
  },

  // Service Enumeration Tools
  enum4linux: {
    id: 'enum4linux',
    name: 'Enum4Linux',
    command: '{path} {target}',
    category: 'service',
    description: 'Windows/Samba enumerator',
    path: KALI_TOOL_PATHS.enum4linux
  },
  smbclient: {
    id: 'smbclient',
    name: 'SMBClient',
    command: '{path} -L {target} -N',
    category: 'service',
    description: 'SMB/CIFS client',
    path: KALI_TOOL_PATHS.smbclient
  },
  crackmapexec: {
    id: 'crackmapexec',
    name: 'CrackMapExec',
    command: '{path} smb {target}',
    category: 'service',
    description: 'Swiss army knife for networks',
    path: KALI_TOOL_PATHS.crackmapexec
  },
  ldapsearch: {
    id: 'ldapsearch',
    name: 'LDAPSearch',
    command: '{path} -h {target} -x -s base',
    category: 'service',
    description: 'LDAP enumeration tool',
    path: KALI_TOOL_PATHS.ldapsearch
  },
  hydra: {
    id: 'hydra',
    name: 'Hydra',
    command: '{path} -L users.txt -P pass.txt {target} http-post-form',
    category: 'service',
    description: 'Login cracker',
    path: KALI_TOOL_PATHS.hydra
  },

  // Cloud and API Tools
  cloudbrute: {
    id: 'cloudbrute',
    name: 'CloudBrute',
    command: '{path} -d {target}',
    category: 'cloud',
    description: 'Cloud infrastructure bruter',
    path: KALI_TOOL_PATHS.cloudbrute
  },
  s3scanner: {
    id: 's3scanner',
    name: 'S3Scanner',
    command: '{path} {target}',
    category: 'cloud',
    description: 'AWS S3 bucket scanner',
    path: KALI_TOOL_PATHS.s3scanner
  },
  arjun: {
    id: 'arjun',
    name: 'Arjun',
    command: '{path} -u {target}',
    category: 'cloud',
    description: 'HTTP parameter discovery',
    path: KALI_TOOL_PATHS.arjun
  },

  // Application Tools
  wpscan: {
    id: 'wpscan',
    name: 'WPScan',
    command: '{path} --url {target}',
    category: 'application',
    description: 'WordPress security scanner',
    path: KALI_TOOL_PATHS.wpscan
  },
  sqlmap: {
    id: 'sqlmap',
    name: 'SQLMap',
    command: '{path} -u {target}',
    category: 'application',
    description: 'SQL injection scanner',
    path: KALI_TOOL_PATHS.sqlmap
  },
  cmseek: {
    id: 'cmseek',
    name: 'CMSeeK',
    command: '{path} -u {target}',
    category: 'application',
    description: 'CMS detection tool',
    path: KALI_TOOL_PATHS.cmseek
  },

  // Wireless Tools
  airodump: {
    id: 'airodump',
    name: 'Airodump-ng',
    command: '{path}',
    category: 'wireless',
    description: 'Wireless packet capture',
    path: KALI_TOOL_PATHS.airodump
  },
  kismet: {
    id: 'kismet',
    name: 'Kismet',
    command: '{path}',
    category: 'wireless',
    description: 'Wireless network detector',
    path: KALI_TOOL_PATHS.kismet
  },

  // Miscellaneous Tools
  theharvester: {
    id: 'theharvester',
    name: 'theHarvester',
    command: '{path} -d {target} -b all',
    category: 'misc',
    description: 'Email and subdomain harvester',
    path: KALI_TOOL_PATHS.theharvester
  },
  spiderfoot: {
    id: 'spiderfoot',
    name: 'SpiderFoot',
    command: '{path} -s {target}',
    category: 'misc',
    description: 'OSINT automation tool',
    path: KALI_TOOL_PATHS.spiderfoot
  }
};

export const runTool = async (toolId: string, target: string): Promise<ToolResult> => {
  const tool = tools[toolId];
  if (!tool) {
    throw new Error(`Tool ${toolId} not found`);
  }

  try {
    await new Promise(resolve => setTimeout(resolve, 500)); 

    return {
      id: Date.now().toString(),
      toolId,
      timestamp: Date.now(),
      target,
      output: `Mock output for ${tool.name} scanning ${target}`,
      status: 'completed'
    };
  } catch (error) {
    throw new Error(`Failed to run ${tool.name}: ${error}`);
  }
};