智能DNS 公共DNS localDNS

[DNS原理入门](http://www.ruanyifeng.com/blog/2016/06/dns.html)

## DNS服务器 ##
DNS服务器的IP地址，有可能是动态的，每次上网时由网关分配，这叫做DHCP机制；也有可能是事先指定的固定地址。

## 域名的层级 ##
主机名.次级域名.顶级域名.根域名
根域名可省略

## 根域名服务器 ##
DNS服务器根据域名的层级，进行分级查询。

所谓"分级查询"，就是从根域名开始，依次查询每一级域名的NS记录，直到查到最终的IP地址，过程大致如下。

从"根域名服务器"查到"顶级域名服务器"的NS记录和A记录（IP地址）
从"顶级域名服务器"查到"次级域名服务器"的NS记录和A记录（IP地址）
从"次级域名服务器"查出"主机名"的IP地址