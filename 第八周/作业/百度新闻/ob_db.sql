-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2016-04-29 09:26:12
-- 服务器版本： 10.1.9-MariaDB
-- PHP Version: 5.6.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ob_db`
--

-- --------------------------------------------------------

--
-- 表的结构 `ob_news`
--

CREATE TABLE `ob_news` (
  `typeID` int(11) NOT NULL,
  `title` varchar(200) NOT NULL,
  `img` varchar(300) NOT NULL,
  `url` varchar(400) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `ob_news`
--

INSERT INTO `ob_news` (`typeID`, `title`, `img`, `url`) VALUES
(1, '14部委联合出拳整治非法集资', 'http://hzdaily.hangzhou.com.cn/mrsb/page/2/2016-04/28/21/2016042821_brief.jpg', 'http://hzdaily.hangzhou.com.cn/mrsb/html/2016-04/28/content_2251492.htm'),
(1, '常外近500学生患病:家长已抗争5月', 'http://n1.itc.cn/img7/adapt/wb/sohulife/2016/04/28/146177870635930738_620_1000.JPEG', 'http://3g.k.sohu.com/t/n130605952'),
(2, '湖南落马厅官迷信:出行必算卦', 'http://img4.cache.netease.com/3g/2016/4/28/2016042806555345640.jpg', 'http://news.163.com/16/0428/06/BLNHR5UQ0001124J.html');

-- --------------------------------------------------------

--
-- 表的结构 `ob_types`
--

CREATE TABLE `ob_types` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `ob_types`
--

INSERT INTO `ob_types` (`id`, `name`) VALUES
(1, '推荐'),
(2, '百家'),
(3, '本地'),
(4, '互联网'),
(5, '娱乐'),
(6, '社会'),
(7, '科技'),
(8, '女人'),
(9, '军事'),
(27, '测试新增');

-- --------------------------------------------------------

--
-- 表的结构 `ob_user`
--

CREATE TABLE `ob_user` (
  `userid` int(11) NOT NULL,
  `username` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `ob_user`
--

INSERT INTO `ob_user` (`userid`, `username`, `password`) VALUES
(1, 'admin@163.com', 'admin');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ob_types`
--
ALTER TABLE `ob_types`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ob_user`
--
ALTER TABLE `ob_user`
  ADD PRIMARY KEY (`userid`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `ob_types`
--
ALTER TABLE `ob_types`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;
--
-- 使用表AUTO_INCREMENT `ob_user`
--
ALTER TABLE `ob_user`
  MODIFY `userid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
