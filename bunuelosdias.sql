USE [master]
GO
/****** Object:  Database [BonuelosDias]    Script Date: 07/02/2022 09:39:40 p. m. ******/
CREATE DATABASE [BonuelosDias]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'BonuelosDias', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\BonuelosDias.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'BonuelosDias_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\BonuelosDias_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [BonuelosDias] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [BonuelosDias].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [BonuelosDias] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [BonuelosDias] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [BonuelosDias] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [BonuelosDias] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [BonuelosDias] SET ARITHABORT OFF 
GO
ALTER DATABASE [BonuelosDias] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [BonuelosDias] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [BonuelosDias] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [BonuelosDias] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [BonuelosDias] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [BonuelosDias] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [BonuelosDias] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [BonuelosDias] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [BonuelosDias] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [BonuelosDias] SET  DISABLE_BROKER 
GO
ALTER DATABASE [BonuelosDias] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [BonuelosDias] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [BonuelosDias] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [BonuelosDias] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [BonuelosDias] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [BonuelosDias] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [BonuelosDias] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [BonuelosDias] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [BonuelosDias] SET  MULTI_USER 
GO
ALTER DATABASE [BonuelosDias] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [BonuelosDias] SET DB_CHAINING OFF 
GO
ALTER DATABASE [BonuelosDias] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [BonuelosDias] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [BonuelosDias] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [BonuelosDias] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
ALTER DATABASE [BonuelosDias] SET QUERY_STORE = OFF
GO
USE [BonuelosDias]
GO
/****** Object:  Table [dbo].[Producto]    Script Date: 07/02/2022 09:39:40 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Producto](
	[codProducto] [varchar](4) NOT NULL,
	[nombre] [varchar](40) NOT NULL,
	[categoria] [char](2) NULL,
	[precio] [float] NOT NULL,
	[stock] [int] NOT NULL,
	[fechaCad] [date] NULL,
	[fechaElab] [date] NULL,
	[fotoUrl] [varchar](max) NULL,
PRIMARY KEY CLUSTERED 
(
	[codProducto] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  View [dbo].[ProductoAVender]    Script Date: 07/02/2022 09:39:40 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE VIEW [dbo].[ProductoAVender] 
as
	select [codProducto],[nombre],[precio],[stock],[fechaCad],[fotoUrl] from Producto where [stock]>0 AND [fechaCad]>CONVERT(DATE, GETDATE())
GO
/****** Object:  Table [dbo].[Cliente]    Script Date: 07/02/2022 09:39:40 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Cliente](
	[cedulaCli] [varchar](10) NOT NULL,
	[nombreCli] [varchar](150) NOT NULL,
	[direccionCli] [varchar](100) NULL,
	[celularCli] [varchar](10) NULL,
	[correoCli] [varchar](50) NOT NULL,
	[fechNac] [date] NULL,
PRIMARY KEY CLUSTERED 
(
	[cedulaCli] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[DetalleVenta]    Script Date: 07/02/2022 09:39:40 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[DetalleVenta](
	[codProd] [varchar](4) NOT NULL,
	[numOrd] [int] NOT NULL,
	[cantidad] [int] NOT NULL,
	[cantXpvp] [decimal](8, 2) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[codProd] ASC,
	[numOrd] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[OrdenCompra]    Script Date: 07/02/2022 09:39:40 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[OrdenCompra](
	[numOrden] [int] NOT NULL,
	[valorTotal] [float] NULL,
	[fecha] [date] NULL,
	[cedulaCliente] [varchar](10) NULL,
	[usernameUsuario] [varchar](20) NULL,
PRIMARY KEY CLUSTERED 
(
	[numOrden] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Usuario]    Script Date: 07/02/2022 09:39:40 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Usuario](
	[usernameUs] [varchar](20) NOT NULL,
	[contrasenaUs] [varchar](20) NULL,
	[cedulaUs] [varchar](10) NULL,
	[nombreUS] [varchar](150) NOT NULL,
	[tipoUs] [char](1) NULL,
	[urImgUs] [varchar](max) NULL,
PRIMARY KEY CLUSTERED 
(
	[usernameUs] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
INSERT [dbo].[Cliente] ([cedulaCli], [nombreCli], [direccionCli], [celularCli], [correoCli], [fechNac]) VALUES (N'0302304342', N'Perea Salasar', N'Santa Marianita
', N'0934345843', N'b@b.com', CAST(N'2000-02-23' AS Date))
INSERT [dbo].[Cliente] ([cedulaCli], [nombreCli], [direccionCli], [celularCli], [correoCli], [fechNac]) VALUES (N'0604855866', N'Santy Guaylla', N'Malecon y Muriel', N'0984242647', N'santyguaylla@gmail.com', CAST(N'2000-12-31' AS Date))
INSERT [dbo].[Cliente] ([cedulaCli], [nombreCli], [direccionCli], [celularCli], [correoCli], [fechNac]) VALUES (N'0702526120', N'Maria Perez', N'La Concordia', N'0999878765', N'mariaperez@hotmail.com', CAST(N'2022-02-07' AS Date))
INSERT [dbo].[Cliente] ([cedulaCli], [nombreCli], [direccionCli], [celularCli], [correoCli], [fechNac]) VALUES (N'0705772143', N'Jessica Toro', N'Avda. 11 de Noviembre', N'099911153', N'jessica_viviana14@hotmail.com', CAST(N'1995-04-14' AS Date))
INSERT [dbo].[Cliente] ([cedulaCli], [nombreCli], [direccionCli], [celularCli], [correoCli], [fechNac]) VALUES (N'0705819217', N'Genesis Cabrera', N'Lizarzaburu', N'0968011439', N'genCabrera@hotmail.com', CAST(N'1992-02-08' AS Date))
INSERT [dbo].[Cliente] ([cedulaCli], [nombreCli], [direccionCli], [celularCli], [correoCli], [fechNac]) VALUES (N'0706152584', N'Pablo Villa', N'Emilio Colina', N'0987667889', N'pableshionvilla@outlook.com', CAST(N'1996-02-08' AS Date))
INSERT [dbo].[Cliente] ([cedulaCli], [nombreCli], [direccionCli], [celularCli], [correoCli], [fechNac]) VALUES (N'0706166147', N'Bryan Jaramillo', N'Avda. Milton Reyes ', N'0992249292', N'bjaramillo@gmail.com', CAST(N'1996-02-07' AS Date))
INSERT [dbo].[Cliente] ([cedulaCli], [nombreCli], [direccionCli], [celularCli], [correoCli], [fechNac]) VALUES (N'0706635091', N'Cristhian Romero', N'ayacucho y carabobo', N'0986783467', N'crisyangel@yahoo.com', CAST(N'1996-09-28' AS Date))
INSERT [dbo].[Cliente] ([cedulaCli], [nombreCli], [direccionCli], [celularCli], [correoCli], [fechNac]) VALUES (N'0706968260', N'Angel Loayza', N'Jose de Lamar', N'0994558966', N'angelloayza@hotmail.com', CAST(N'1998-02-08' AS Date))
INSERT [dbo].[Cliente] ([cedulaCli], [nombreCli], [direccionCli], [celularCli], [correoCli], [fechNac]) VALUES (N'0802051151', N'Ana Zanchez', N'Avenue 11 de nobiembre y Av milton reyes', N'0989348489', N'a@a.com', CAST(N'1987-02-05' AS Date))
INSERT [dbo].[Cliente] ([cedulaCli], [nombreCli], [direccionCli], [celularCli], [correoCli], [fechNac]) VALUES (N'0803051150', N'Ruben Valencia', N'Las Palmas', N'0962739354', N'rd_navarrete@outlook.com', CAST(N'1987-12-09' AS Date))
INSERT [dbo].[Cliente] ([cedulaCli], [nombreCli], [direccionCli], [celularCli], [correoCli], [fechNac]) VALUES (N'0803229525', N'Luis Robles', N'en la esquina
', N'0948567363', N'a@a.com', CAST(N'2000-01-01' AS Date))
INSERT [dbo].[Cliente] ([cedulaCli], [nombreCli], [direccionCli], [celularCli], [correoCli], [fechNac]) VALUES (N'0803229533', N'Leonel Robles', N'La alameda', N'0934873461', N'b@b.ec', CAST(N'2000-01-02' AS Date))
INSERT [dbo].[Cliente] ([cedulaCli], [nombreCli], [direccionCli], [celularCli], [correoCli], [fechNac]) VALUES (N'0927043638', N'Efraín Cedeño', N'Jose de Lamar', N'0996919789', N'efracedenio@espoch.edu.ec', CAST(N'1995-01-17' AS Date))
INSERT [dbo].[Cliente] ([cedulaCli], [nombreCli], [direccionCli], [celularCli], [correoCli], [fechNac]) VALUES (N'1234567890', N'Anastasia Gonzales', N'Lamina de queso', N'0981748550', N'ansgzls@gmail.com', CAST(N'2000-01-03' AS Date))
INSERT [dbo].[Cliente] ([cedulaCli], [nombreCli], [direccionCli], [celularCli], [correoCli], [fechNac]) VALUES (N'1315619773', N'Natanael Moreira', N'Avda 11 de Noviembre', N'0998619775', N'natamoreira@outlook.com', CAST(N'1997-02-08' AS Date))
INSERT [dbo].[Cliente] ([cedulaCli], [nombreCli], [direccionCli], [celularCli], [correoCli], [fechNac]) VALUES (N'1712886470', N'Angela Zambrano', N'La Carmen', N'092145697', N'zamangel@gmail.com', CAST(N'1985-01-03' AS Date))
INSERT [dbo].[Cliente] ([cedulaCli], [nombreCli], [direccionCli], [celularCli], [correoCli], [fechNac]) VALUES (N'1719176727', N'Pablo Bolaños', N'santo domingo
', N'0987654321', N'pablin@8bits', CAST(N'2000-01-04' AS Date))
INSERT [dbo].[Cliente] ([cedulaCli], [nombreCli], [direccionCli], [celularCli], [correoCli], [fechNac]) VALUES (N'1750979773', N'Anthony Cadena', N'Juan Montalvo', N'0987119120', N'anthonyc.24@gmail.com', CAST(N'1998-11-24' AS Date))
INSERT [dbo].[Cliente] ([cedulaCli], [nombreCli], [direccionCli], [celularCli], [correoCli], [fechNac]) VALUES (N'2300677362', N'Melany Secaira', N'Santo Domingo
', N'0981654855', N'melas@gmail.com', CAST(N'2001-03-16' AS Date))
INSERT [dbo].[Cliente] ([cedulaCli], [nombreCli], [direccionCli], [celularCli], [correoCli], [fechNac]) VALUES (N'2300677370', N'Alicia Maravilla', N'Chone', N'0987774561', N'paismaravilla@live.es', CAST(N'2000-09-09' AS Date))
INSERT [dbo].[Cliente] ([cedulaCli], [nombreCli], [direccionCli], [celularCli], [correoCli], [fechNac]) VALUES (N'9999999999', N'Consumidor Final', N'S/D', N'S/D', N'bunuelosdias@hotmail.com', NULL)
GO
INSERT [dbo].[DetalleVenta] ([codProd], [numOrd], [cantidad], [cantXpvp]) VALUES (N'AA01', 1, 1, CAST(0.35 AS Decimal(8, 2)))
INSERT [dbo].[DetalleVenta] ([codProd], [numOrd], [cantidad], [cantXpvp]) VALUES (N'AA01', 2, 10, CAST(3.50 AS Decimal(8, 2)))
INSERT [dbo].[DetalleVenta] ([codProd], [numOrd], [cantidad], [cantXpvp]) VALUES (N'AA02', 1, 7, CAST(21.00 AS Decimal(8, 2)))
INSERT [dbo].[DetalleVenta] ([codProd], [numOrd], [cantidad], [cantXpvp]) VALUES (N'AA02', 2, 3, CAST(9.00 AS Decimal(8, 2)))
INSERT [dbo].[DetalleVenta] ([codProd], [numOrd], [cantidad], [cantXpvp]) VALUES (N'AA03', 1, 1, CAST(1.50 AS Decimal(8, 2)))
INSERT [dbo].[DetalleVenta] ([codProd], [numOrd], [cantidad], [cantXpvp]) VALUES (N'AA03', 2, 2, CAST(3.00 AS Decimal(8, 2)))
INSERT [dbo].[DetalleVenta] ([codProd], [numOrd], [cantidad], [cantXpvp]) VALUES (N'AA03', 4, 1, CAST(1.50 AS Decimal(8, 2)))
INSERT [dbo].[DetalleVenta] ([codProd], [numOrd], [cantidad], [cantXpvp]) VALUES (N'AA04', 2, 5, CAST(6.25 AS Decimal(8, 2)))
INSERT [dbo].[DetalleVenta] ([codProd], [numOrd], [cantidad], [cantXpvp]) VALUES (N'AA04', 4, 3, CAST(3.75 AS Decimal(8, 2)))
INSERT [dbo].[DetalleVenta] ([codProd], [numOrd], [cantidad], [cantXpvp]) VALUES (N'AA09', 3, 3, CAST(7.50 AS Decimal(8, 2)))
INSERT [dbo].[DetalleVenta] ([codProd], [numOrd], [cantidad], [cantXpvp]) VALUES (N'AA20', 3, 2, CAST(90.00 AS Decimal(8, 2)))
INSERT [dbo].[DetalleVenta] ([codProd], [numOrd], [cantidad], [cantXpvp]) VALUES (N'AA33', 3, 2, CAST(1.10 AS Decimal(8, 2)))
GO
INSERT [dbo].[OrdenCompra] ([numOrden], [valorTotal], [fecha], [cedulaCliente], [usernameUsuario]) VALUES (1, 24.74, CAST(N'2022-02-07' AS Date), N'9999999999', N'Jessica')
INSERT [dbo].[OrdenCompra] ([numOrden], [valorTotal], [fecha], [cedulaCliente], [usernameUsuario]) VALUES (2, 23.61, CAST(N'2022-02-07' AS Date), N'9999999999', N'Ruben')
INSERT [dbo].[OrdenCompra] ([numOrden], [valorTotal], [fecha], [cedulaCliente], [usernameUsuario]) VALUES (3, 107.86, CAST(N'2022-02-07' AS Date), N'9999999999', N'Ruben')
INSERT [dbo].[OrdenCompra] ([numOrden], [valorTotal], [fecha], [cedulaCliente], [usernameUsuario]) VALUES (4, 5.88, CAST(N'2022-02-07' AS Date), N'9999999999', N'Ruben')
GO
INSERT [dbo].[Producto] ([codProducto], [nombre], [categoria], [precio], [stock], [fechaCad], [fechaElab], [fotoUrl]) VALUES (N'AA01', N'cup cakes', N'BO', 0.35, 34, CAST(N'2022-02-08' AS Date), CAST(N'2022-02-07' AS Date), N'https://www.couponsforyourfamily.com/wp-content/uploads/2015/12/91wTIpQngXL._SL1500_.jpg')
INSERT [dbo].[Producto] ([codProducto], [nombre], [categoria], [precio], [stock], [fechaCad], [fechaElab], [fotoUrl]) VALUES (N'AA02', N'Red Velvet', N'RC', 3, 7, CAST(N'2022-02-09' AS Date), CAST(N'2022-02-07' AS Date), N'https://th.bing.com/th/id/OIP.ANDftWbEARHQ30PpJZ2o7wHaHa?pid=ImgDet&rs=1')
INSERT [dbo].[Producto] ([codProducto], [nombre], [categoria], [precio], [stock], [fechaCad], [fechaElab], [fotoUrl]) VALUES (N'AA03', N'Postre tres leches', N'RF', 1.5, 6, CAST(N'2022-02-11' AS Date), CAST(N'2022-02-07' AS Date), N'https://3lechesfactory.com/wp-content/uploads/2013/03/3leches2-570x380.jpg')
INSERT [dbo].[Producto] ([codProducto], [nombre], [categoria], [precio], [stock], [fechaCad], [fechaElab], [fotoUrl]) VALUES (N'AA04', N'Tiramisú', N'RF', 1.25, 12, CAST(N'2022-02-11' AS Date), CAST(N'2022-02-07' AS Date), N'https://th.bing.com/th/id/OIP.b8j8xkcByJTxP9e29VonaQHaE8?pid=ImgDet&rs=1')
INSERT [dbo].[Producto] ([codProducto], [nombre], [categoria], [precio], [stock], [fechaCad], [fechaElab], [fotoUrl]) VALUES (N'AA05', N'Pan de Centeno', N'PA', 0.35, 37, CAST(N'2022-02-08' AS Date), CAST(N'2022-02-07' AS Date), N'https://t2.uc.ltmcdn.com/images/9/2/2/img_que_beneficios_tiene_el_pan_de_centeno_26229_600.jpg')
INSERT [dbo].[Producto] ([codProducto], [nombre], [categoria], [precio], [stock], [fechaCad], [fechaElab], [fotoUrl]) VALUES (N'AA06', N'Macarrones', N'BO', 0.75, 45, CAST(N'2022-02-08' AS Date), CAST(N'2022-02-07' AS Date), N'https://4.bp.blogspot.com/--XiD-lzWiQA/V_6G1YKrtqI/AAAAAAAABHw/oG3UBv5ag1MeleEXzMBeqa7ojOYYpRubQCLcB/s1600/mac1_copia.jpg')
INSERT [dbo].[Producto] ([codProducto], [nombre], [categoria], [precio], [stock], [fechaCad], [fechaElab], [fotoUrl]) VALUES (N'AA07', N'Alfajores', N'BO', 0.45, 18, CAST(N'2022-02-08' AS Date), CAST(N'2022-02-07' AS Date), N'https://ciudadnoticias.es/wp-content/uploads/2021/03/alfajores-de-maicena.jpg')
INSERT [dbo].[Producto] ([codProducto], [nombre], [categoria], [precio], [stock], [fechaCad], [fechaElab], [fotoUrl]) VALUES (N'AA09', N'Pastel de manzana', N'RC', 2.5, 9, CAST(N'2022-02-09' AS Date), CAST(N'2022-02-07' AS Date), N'https://www.saborusa.com/wp-content/uploads/2019/10/81.-Pie-de-manzana.png')
INSERT [dbo].[Producto] ([codProducto], [nombre], [categoria], [precio], [stock], [fechaCad], [fechaElab], [fotoUrl]) VALUES (N'AA10', N'Pastel de chocolate fundido con peras', N'RC', 4.5, 9, CAST(N'2022-02-09' AS Date), CAST(N'2022-02-07' AS Date), N'https://i.blogs.es/a06bf0/cake-choco-pera-dap/650_1200.jpg')
INSERT [dbo].[Producto] ([codProducto], [nombre], [categoria], [precio], [stock], [fechaCad], [fechaElab], [fotoUrl]) VALUES (N'AA11', N'Pastel de maduro', N'RC', 2.5, 23, CAST(N'2022-02-09' AS Date), CAST(N'2022-02-07' AS Date), N'https://www.guiadelnino.com/var/guiadelnino.com/storage/images/recetas-para-ninos-y-bebes/dulces-pasteles-y-tartas/bizcocho-de-platano/7624222-6-esl-ES/bizcocho-de-platano.jpg')
INSERT [dbo].[Producto] ([codProducto], [nombre], [categoria], [precio], [stock], [fechaCad], [fechaElab], [fotoUrl]) VALUES (N'AA20', N'Pastel de bodas', N'RC', 45, 3, CAST(N'2022-02-09' AS Date), CAST(N'2022-02-07' AS Date), N'https://www.panoramaweb.com.mx/u/fotografias/m/2021/8/24/f638x638-10034_68201_4722.jpg')
INSERT [dbo].[Producto] ([codProducto], [nombre], [categoria], [precio], [stock], [fechaCad], [fechaElab], [fotoUrl]) VALUES (N'AA21', N'Flan', N'RF', 0.95, 14, CAST(N'2022-02-11' AS Date), CAST(N'2022-02-07' AS Date), N'https://suplementoslaplata.com/blog/wp-content/uploads/2015/12/flan-proteico-dieta.jpg')
INSERT [dbo].[Producto] ([codProducto], [nombre], [categoria], [precio], [stock], [fechaCad], [fechaElab], [fotoUrl]) VALUES (N'AA22', N'Rosca de Reyes', N'RC', 2.5, 12, CAST(N'2022-02-09' AS Date), CAST(N'2022-02-07' AS Date), N'https://th.bing.com/th/id/R.f022f14c012496e31e090c24f8874c40?rik=4MzkKTj%2fDDbw7w&pid=ImgRaw&r=0')
INSERT [dbo].[Producto] ([codProducto], [nombre], [categoria], [precio], [stock], [fechaCad], [fechaElab], [fotoUrl]) VALUES (N'AA23', N'Bizcochuelos', N'PA', 0.5, 30, CAST(N'2022-02-08' AS Date), CAST(N'2022-02-07' AS Date), N'https://images.unsplash.com/photo-1605466237764-3d8d802c8a8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80')
INSERT [dbo].[Producto] ([codProducto], [nombre], [categoria], [precio], [stock], [fechaCad], [fechaElab], [fotoUrl]) VALUES (N'AA24', N'Torta mojada de chocolate', N'RF', 5.25, 6, CAST(N'2022-02-11' AS Date), CAST(N'2022-02-07' AS Date), N'https://images.aws.nestle.recipes/original/d63bbc524662b1555f155bca1647ca69_torta-humada-de-chocolate.png')
INSERT [dbo].[Producto] ([codProducto], [nombre], [categoria], [precio], [stock], [fechaCad], [fechaElab], [fotoUrl]) VALUES (N'AA25', N'Baguette', N'PA', 1, 15, CAST(N'2022-02-08' AS Date), CAST(N'2022-02-07' AS Date), N'https://elgourmet.s3.amazonaws.com/recetas/share/share_4t5zic2x3h_1200_800baguete.jpg')
INSERT [dbo].[Producto] ([codProducto], [nombre], [categoria], [precio], [stock], [fechaCad], [fechaElab], [fotoUrl]) VALUES (N'AA26', N'Pan de Cebada', N'PA', 0.32, 28, CAST(N'2022-02-08' AS Date), CAST(N'2022-02-07' AS Date), N'https://www.nutricienta.com/imagenes/alimentos/alimento-nutricienta-pan-de-cebada.jpg')
INSERT [dbo].[Producto] ([codProducto], [nombre], [categoria], [precio], [stock], [fechaCad], [fechaElab], [fotoUrl]) VALUES (N'AA27', N'Pan de dulce', N'PA', 0.15, 50, CAST(N'2022-02-08' AS Date), CAST(N'2022-02-07' AS Date), N'https://cdn.kiwilimon.com/clasificacion/3915/3915.jpg')
INSERT [dbo].[Producto] ([codProducto], [nombre], [categoria], [precio], [stock], [fechaCad], [fechaElab], [fotoUrl]) VALUES (N'AA28', N'Pan de Avena', N'PA', 2.1, 35, CAST(N'2022-02-08' AS Date), CAST(N'2022-02-07' AS Date), N'https://4.bp.blogspot.com/-SD7VIAyc1Yg/WsWTPsrzd1I/AAAAAAAAH4c/TBGo264hsVc01Hg2EuubJqNhZRAcrJiHACLcBGAs/s1600/pan-avena-receta-facil.jpg')
INSERT [dbo].[Producto] ([codProducto], [nombre], [categoria], [precio], [stock], [fechaCad], [fechaElab], [fotoUrl]) VALUES (N'AA29', N'Pastel de Vainilla', N'RC', 25, 10, CAST(N'2022-02-09' AS Date), CAST(N'2022-02-07' AS Date), N'https://th.bing.com/th/id/R.fba4cbb68c44689c404b54f7f24ef8e2?rik=H7wfXG%2bXhvLqfQ&riu=http%3a%2f%2fwww.wiltonenespanol.com%2fwp-content%2fuploads%2f2017%2f02%2fpastel-de-vainilla.jpg&ehk=8Qo4q%2fFZxaxxrE%2bQriAVF%2br1Cm9GslEfD0Fl4f9cQrg%3d&risl=&pid=ImgRaw&r=0')
INSERT [dbo].[Producto] ([codProducto], [nombre], [categoria], [precio], [stock], [fechaCad], [fechaElab], [fotoUrl]) VALUES (N'AA30', N'Pan Integral', N'PA', 0.85, 58, CAST(N'2022-02-08' AS Date), CAST(N'2022-02-07' AS Date), N'https://notitotal.com/wp-content/uploads/2020/06/panintegralfinaalfinaaal.jpg')
INSERT [dbo].[Producto] ([codProducto], [nombre], [categoria], [precio], [stock], [fechaCad], [fechaElab], [fotoUrl]) VALUES (N'AA31', N'Buñuelo de Manzana', N'PA', 0.55, 65, CAST(N'2022-02-08' AS Date), CAST(N'2022-02-07' AS Date), N'https://www.cocinaabuenashoras.com/files/bunuelos-manzana-p.jpg')
INSERT [dbo].[Producto] ([codProducto], [nombre], [categoria], [precio], [stock], [fechaCad], [fechaElab], [fotoUrl]) VALUES (N'AA32', N'Buñuelos de Naranja Rellenos de Chocolat', N'PA', 0.6, 54, CAST(N'2022-02-08' AS Date), CAST(N'2022-02-07' AS Date), N'https://dollsanddolls.com/blog/wp-content/uploads/2019/03/53e754d13b1a83a53c39c3c53022268b-e1551449767388-740x708.jpg')
INSERT [dbo].[Producto] ([codProducto], [nombre], [categoria], [precio], [stock], [fechaCad], [fechaElab], [fotoUrl]) VALUES (N'AA33', N'Buñuelo de Calabaza', N'PA', 0.55, 43, CAST(N'2022-02-08' AS Date), CAST(N'2022-02-07' AS Date), N'https://dollsanddolls.com/blog/wp-content/uploads/2019/03/1603CocinaDeFamiliaT2BunuelosCalabazaChocolate1-740x416.jpg')
INSERT [dbo].[Producto] ([codProducto], [nombre], [categoria], [precio], [stock], [fechaCad], [fechaElab], [fotoUrl]) VALUES (N'AA34', N'Galletas de Chocolate', N'BO', 0.35, 34, CAST(N'2022-02-08' AS Date), CAST(N'2022-02-07' AS Date), N'https://www.crhoy.com/imagenes/2020/04/stock-image-35834951-l-2015.jpg')
INSERT [dbo].[Producto] ([codProducto], [nombre], [categoria], [precio], [stock], [fechaCad], [fechaElab], [fotoUrl]) VALUES (N'AA35', N'Pan Gusanito', N'PA', 0.18, 45, CAST(N'2022-02-08' AS Date), CAST(N'2022-02-07' AS Date), N'https://th.bing.com/th/id/R.91a1a57eb2356888b639885c48e53e9e?rik=mgrsGVLU1g%2fNCQ&riu=http%3a%2f%2fwww.cyril-boutique.com%2fwp-content%2fuploads%2f2018%2f06%2fGusano-1024x682.jpg&ehk=q6RvBQ5tbPl5pGYgzfIOghjv7%2fcY3ybvaeTkIoUBnTE%3d&risl=&pid=ImgRaw&r=0')
GO
INSERT [dbo].[Usuario] ([usernameUs], [contrasenaUs], [cedulaUs], [nombreUS], [tipoUs], [urImgUs]) VALUES (N'', N'', N'3245435666', N'Pablo Bolaños', N'A', N'https://scontent.fuio1-2.fna.fbcdn.net/v/t1.18169-9/13516498_1106658162726177_1455496558360784680_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=174925&_nc_ohc=XfeSjUmF72EAX-U7agb&_nc_oc=AQn4nQX9_RsVuVoG08WKO6czZ1qtC250rCNv-D9A0UADqntTp74CHEKOZdpnFDpLSK4&_nc_ht=scontent.fuio1-2.fna&oh=00_AT9pijoNULzQ6HZqIY7wA9iJASGiAnDW0-Tv8HTYT--EnA&oe=6211BBFC')
INSERT [dbo].[Usuario] ([usernameUs], [contrasenaUs], [cedulaUs], [nombreUS], [tipoUs], [urImgUs]) VALUES (N'Jessica', N'6806', N'0705772143', N'Jessica Toro', N'A', N'https://firebasestorage.googleapis.com/v0/b/bunuelosdias-cdb3b.appspot.com/o/trash%2FJess.jpeg?alt=media&token=813d942e-56e3-4f7a-999e-fb29f2e8c985')
INSERT [dbo].[Usuario] ([usernameUs], [contrasenaUs], [cedulaUs], [nombreUS], [tipoUs], [urImgUs]) VALUES (N'LuisR', N'0960', N'0803229525', N'Luis Robles', N'V', N'https://scontent.fgye1-1.fna.fbcdn.net/v/t39.30808-6/248432716_4502303579855038_7845259343569561606_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=TSOMATD3poIAX_ltIwV&_nc_ht=scontent.fgye1-1.fna&oh=00_AT_fmX4PYaBPGxJQ6zIoa6A_MD3ISYAVEQPqftM2visYXA&oe=61F9BE9E')
INSERT [dbo].[Usuario] ([usernameUs], [contrasenaUs], [cedulaUs], [nombreUS], [tipoUs], [urImgUs]) VALUES (N'Ruben', N'6795', N'0803051150', N'Ruben Valencia', N'A', N'https://firebasestorage.googleapis.com/v0/b/bunuelosdias-cdb3b.appspot.com/o/trash%2Fyo_perfil.jpg?alt=media&token=485e286f-ac3f-464f-a1c5-e986bbd0e2e2')
INSERT [dbo].[Usuario] ([usernameUs], [contrasenaUs], [cedulaUs], [nombreUS], [tipoUs], [urImgUs]) VALUES (N'Santy', N'1205', N'0604855866', N'Santiago Guaylla', N'A', N'https://scontent.fuio1-1.fna.fbcdn.net/v/t1.18169-9/17884026_1238521752931509_57540727453168719_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=174925&_nc_ohc=wgZxoxSw5EEAX90TFfD&tn=-7DZIRjnS_dU03xG&_nc_ht=scontent.fuio1-1.fna&oh=00_AT_9zVYNDmMiwOigWxKdeDMoo71zmEvidj8mjSj5cPK83w&oe=62149C11')
INSERT [dbo].[Usuario] ([usernameUs], [contrasenaUs], [cedulaUs], [nombreUS], [tipoUs], [urImgUs]) VALUES (N'Secaira', N'1603', N'2300677362', N'Melany Secaira', N'V', N'https://scontent.fuio1-2.fna.fbcdn.net/v/t1.6435-9/60598960_2422079438027315_877785066401431552_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=84a396&_nc_ohc=LGeDRJG335YAX9Y4gEv&_nc_ht=scontent.fuio1-2.fna&oh=00_AT97udKi4OBHyLBtSepXck8G7C-JTed1JKOn1-KGVG2gLA&oe=6214EE3E')
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [UQ__Usuario__BBA1EFDE049E30EA]    Script Date: 07/02/2022 09:39:40 p. m. ******/
ALTER TABLE [dbo].[Usuario] ADD UNIQUE NONCLUSTERED 
(
	[cedulaUs] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
ALTER TABLE [dbo].[DetalleVenta]  WITH CHECK ADD FOREIGN KEY([codProd])
REFERENCES [dbo].[Producto] ([codProducto])
GO
ALTER TABLE [dbo].[DetalleVenta]  WITH CHECK ADD FOREIGN KEY([numOrd])
REFERENCES [dbo].[OrdenCompra] ([numOrden])
GO
ALTER TABLE [dbo].[OrdenCompra]  WITH CHECK ADD FOREIGN KEY([cedulaCliente])
REFERENCES [dbo].[Cliente] ([cedulaCli])
GO
ALTER TABLE [dbo].[OrdenCompra]  WITH CHECK ADD FOREIGN KEY([usernameUsuario])
REFERENCES [dbo].[Usuario] ([usernameUs])
GO
ALTER TABLE [dbo].[Producto]  WITH CHECK ADD CHECK  (([categoria]='PA' OR [categoria]='RF' OR [categoria]='RC' OR [categoria]='BO'))
GO
ALTER TABLE [dbo].[Usuario]  WITH CHECK ADD  CONSTRAINT [Chk_dbo_tipoUs] CHECK  (([tipoUs]='A' OR [tipoUs]='V'))
GO
ALTER TABLE [dbo].[Usuario] CHECK CONSTRAINT [Chk_dbo_tipoUs]
GO
/****** Object:  StoredProcedure [dbo].[sp_BorrarCliente]    Script Date: 07/02/2022 09:39:40 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[sp_BorrarCliente]
@cedulaCli varchar (10)
as begin
	declare @cliente as int 
	declare @ordencompra as int
	set @cliente=(select count([cedulaCli]) from Cliente where [cedulaCli] = @cedulaCli)
	set @ordencompra = (select count(p.[cedulaCli]) from OrdenCompra dv inner join Cliente p 
	on p.[cedulaCli]= dv.cedulaCliente
where p.[cedulaCli]=@cedulaCli and dv.cedulaCliente=@cedulaCli)
	if(@cliente = 1)begin
		if(@ordencompra>0) 
			select 1 as tipo, 'Este cliente no puede ser borrado' as msg
		else begin
			delete from Cliente where [cedulaCli]=@cedulaCli
			select 2 as tipo,'Cliente borrado exitosamente' as msg
		end
	end ELSE begin
		select 3 as tipo,'La cédula ingresada no existe' as msg
	end
end
GO
/****** Object:  StoredProcedure [dbo].[sp_BorrarDetalleVenta]    Script Date: 07/02/2022 09:39:40 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[sp_BorrarDetalleVenta]
(
	@codPro varchar(4),
	@nOrd integer,
	@cant integer
)as begin
	declare @cantA integer
	set @cantA = (select [stock] from Producto where [codProducto]=@codPro )
update Producto set [stock]= (@cantA+@cant)
where codProducto=@codPro
delete from DetalleVenta where [codProd]=@codPro and [numOrd]=@nOrd
end
GO
/****** Object:  StoredProcedure [dbo].[sp_BorrarProducto]    Script Date: 07/02/2022 09:39:40 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[sp_BorrarProducto]
@codProducto varchar (4)
as begin
	declare @producto as int 
	declare @detalleventa as int
	set @producto=(select count(codProducto) from Producto where codProducto = @codProducto)
	set @detalleventa = (select count(p.codProducto) from DetalleVenta dv inner join Producto p 
	on p.codProducto= dv.codProd
where p.codProducto=@codProducto and dv.codProd=@codProducto)
	if(@producto = 1)begin
		if(@detalleventa>0) 
			select 1 as tipo,'Este producto no puede ser borrado' as msg
		else begin
			delete from Producto where codProducto=@codProducto
			select 2 as tipos,'Producto borrado exitosamente' as msg
		end
	end ELSE begin
		select 3 as tipo,'El código ingresado no existe' as msg
	end
end
GO
/****** Object:  StoredProcedure [dbo].[sp_BotarPcaducados]    Script Date: 07/02/2022 09:39:40 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[sp_BotarPcaducados]
as
update Producto 
set stock = 0, fechaCad = Null, fechaElab = Null
where fechaCad <= CONVERT(DATE, GETDATE()) 
GO
/****** Object:  StoredProcedure [dbo].[sp_CumpleañosCli]    Script Date: 07/02/2022 09:39:40 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[sp_CumpleañosCli]
as
select * from Cliente c
where day(fechNac)=day (DATEADD(d,+1,GETDATE())) and month(fechNac)=month(DATEADD(d,+1,GETDATE()))
or day(fechNac)=day (CONVERT(DATE, GETDATE())) and month(fechNac)=month(CONVERT(DATE, GETDATE()))
GO
/****** Object:  StoredProcedure [dbo].[sp_DetalleVenta]    Script Date: 07/02/2022 09:39:40 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[sp_DetalleVenta]
	@no int
AS
select DV.[codProd],P.[nombre],P.[precio],DV.[cantidad],DV.[cantXpvp] from [dbo].[DetalleVenta] DV
INNER JOIN [dbo].[Producto] P ON DV.[codProd]=P.[codProducto] where DV.numOrd=@no
GO
/****** Object:  StoredProcedure [dbo].[sp_EditarStock]    Script Date: 07/02/2022 09:39:40 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[sp_EditarStock]
@codP varchar(4),
@numOrd integer,
@op integer
as
begin
declare @cantA integer
declare @cantRestar integer
set @cantA = (select [stock] from [dbo].[Producto] where [codProducto] = @codP)
set @cantRestar = (select [cantidad] from [dbo].[DetalleVenta] where [codProd]= @codP and [numOrd]=@numOrd)
if (@op=1)
update Producto set [stock]= (@cantA-@cantRestar)
where codProducto=@codP
else if (@op=2)
update Producto set [stock]= (@cantA+@cantRestar)
where codProducto=@codP
end
GO
/****** Object:  StoredProcedure [dbo].[sp_EditarStockModificado]    Script Date: 07/02/2022 09:39:40 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[sp_EditarStockModificado]
@codP varchar(4),
@numOrd integer,
@valor integer,
@opM integer
as
begin
declare @cantA integer
set @cantA = (select [stock] from [dbo].[Producto] where [codProducto] = @codP)
if (@opM=1)
update Producto set [stock]= (@cantA-@valor)
where codProducto=@codP
else if (@opM=2)
update Producto set [stock]= (@cantA+@valor)
where codProducto=@codP
end
GO
/****** Object:  StoredProcedure [dbo].[sp_gananciahoy]    Script Date: 07/02/2022 09:39:40 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[sp_gananciahoy] as
select sum([valorTotal]) as Total from [dbo].[OrdenCompra] where [fecha]=CONVERT(DATE, GETDATE())
GO
/****** Object:  StoredProcedure [dbo].[sp_insertarCliente]    Script Date: 07/02/2022 09:39:40 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[sp_insertarCliente] 
(
	@cedula  varchar(10),
	@nombre varchar(150), 
	@direccion varchar(100),
	@celular varchar(10),
	@correoCli varchar(50),
	@fecN date
)as
begin
insert into Cliente([cedulaCli],[nombreCli],[direccionCli], [celularCli], [correoCli], fechNac)
values (@cedula, @nombre, @direccion, @celular, @correoCli, @fecN) 
end
GO
/****** Object:  StoredProcedure [dbo].[sp_insertarDetalleVenta]    Script Date: 07/02/2022 09:39:40 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[sp_insertarDetalleVenta] 
(
	@codPro varchar(4),
	@nOrd integer,
	@cant integer
)as
begin
declare @total decimal (8,2)
declare @cantA integer
set @cantA = (select [stock] from Producto where [codProducto]=@codPro )
exec sp_precioXcantidad @codPro, @cant,@total output
update Producto set [stock]= (@cantA-@cant)
where codProducto=@codPro
insert into DetalleVenta (codProd, numOrd, cantidad, cantXpvp)
values (@codPro, @nOrd, @cant, @total)
end
GO
/****** Object:  StoredProcedure [dbo].[sp_insertarOrdenCompra]    Script Date: 07/02/2022 09:39:40 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[sp_insertarOrdenCompra] 
(
	@Vtotal decimal (7,2),
	@fech date,
	@cedulC varchar(10),
	@usernameU varchar(20)
)
as
begin
declare @oc int
set @oc = (select COUNT(numOrden) as OC from OrdenCompra)+1
insert into OrdenCompra ([numOrden],valorTotal,fecha,cedulaCliente,usernameUsuario)
values (@oc,@Vtotal,@fech,@cedulC,@usernameU)
end
GO
/****** Object:  StoredProcedure [dbo].[sp_insertarProducto]    Script Date: 07/02/2022 09:39:40 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[sp_insertarProducto]
(
	@codProducto varchar(4),
	@nombre varchar (40),
	@categoria char(2) ,
	@precio decimal (5,2),
	@stock integer,
	@fechaElab date,
	@foto varchar(max)
)as
begin
declare @fechaCad date 
exec sp_PfechCad @fechaElab, @categoria, @fechaCad output
insert into Producto (codProducto, nombre, categoria, precio, stock, fechaCad, fechaElab, fotoUrl )
values (@codProducto,@nombre,@categoria,@precio,@stock,@fechaCad,@fechaElab, @foto)
end
GO
/****** Object:  StoredProcedure [dbo].[sp_ModificarCliente]    Script Date: 07/02/2022 09:39:40 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[sp_ModificarCliente]
(
	@cedula  varchar(10),
	@nombre varchar(150), 
	@direccion varchar(100),
	@celular varchar(10),
	@correoCli varchar(50),
	@fecN date
)as
begin
Update Cliente set cedulaCli=@cedula, nombreCli=@nombre, direccionCli=@direccion, [celularCli]=@celular, 
	correoCli=@correoCli, fechNac=@fecN
Where cedulaCli=@cedula
end
GO
/****** Object:  StoredProcedure [dbo].[sp_ModificarDetalleVenta]    Script Date: 07/02/2022 09:39:40 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[sp_ModificarDetalleVenta]
(
	@codPro varchar(4),
	@nOrd integer,
	@cant integer
)as begin
	declare @cantA integer
	declare @cantB integer
	declare @total decimal (8,2)
	set @cantA = (select [stock] from Producto where [codProducto]=@codPro )
	set @cantB = (select [cantidad] from DetalleVenta where [codProd]=@codPro and [numOrd]=@nOrd)
	exec sp_precioXcantidad @codPro, @cant,@total output
update Producto set [stock]= (@cantA+@cantB)
where codProducto=@codPro
update DetalleVenta set cantidad=@cant, [cantXpvp]=@total 
where [codProd]=@codPro and [numOrd]=@nOrd
set @cantA = (select [stock] from Producto where [codProducto]=@codPro )
update Producto set [stock]= (@cantA-@cant) where codProducto=@codPro
end
GO
/****** Object:  StoredProcedure [dbo].[sp_ModificarOrdenCompra]    Script Date: 07/02/2022 09:39:40 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[sp_ModificarOrdenCompra]
(
	@oc int,
	@Vtotal decimal (7,2),
	@fech date,
	@cedulC varchar(10),
	@usernameU varchar(20)
)as
begin
update [dbo].[OrdenCompra] set [valorTotal]=@Vtotal, [fecha]=@fech, [cedulaCliente]=@cedulC, [usernameUsuario]=@usernameU
where [numOrden]=@oc
end
GO
/****** Object:  StoredProcedure [dbo].[sp_ModificarProducto]    Script Date: 07/02/2022 09:39:40 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[sp_ModificarProducto]
	(
	@codProducto varchar(4),
	@nombre varchar (40),
	@categoria char(2) ,
	@precio decimal (5,2),
	@stock integer,
	@fechaElab date,
	@foto varchar(max)
)as
begin
declare @fechaCad date 
exec sp_PfechCad @fechaElab, @categoria, @fechaCad output
update Producto set codProducto=@codProducto, nombre=@nombre, categoria=@categoria,
precio=@precio, stock=@stock, fechaCad=@fechaCad, fechaElab=@fechaElab, fotoUrl=@foto
where codProducto=@codProducto
end
GO
/****** Object:  StoredProcedure [dbo].[sp_Pcaducados]    Script Date: 07/02/2022 09:39:40 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[sp_Pcaducados]
as
select * from Producto P
where P.fechaCad <= CONVERT(DATE, GETDATE()) 
GO
/****** Object:  StoredProcedure [dbo].[sp_PfechCad]    Script Date: 07/02/2022 09:39:40 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[sp_PfechCad]
--@codP varchar(4), 
@elab date,
@cat char(2),
@result date output
as 
begin
if(@elab = null)
	set @result = null 
else if (@cat='PA') set @result = (DATEADD(d,+1,@elab)) 
	else if(@cat='RC')set @result = (DATEADD(d,+2,@elab)) 
	else if(@cat='RF') set @result = (DATEADD(d,+4,@elab)) 
	else if(@cat='BO') set @result = (DATEADD(d,+1,@elab))
end
GO
/****** Object:  StoredProcedure [dbo].[sp_Pmasvendido]    Script Date: 07/02/2022 09:39:40 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[sp_Pmasvendido]

as begin
declare @inicio date
declare @fin date

set @inicio= (select  CONVERT(varchar,dateadd(d,-(day(getdate()-1)),getdate()),106)) --First day of previous month
set @fin = (select CONVERT(varchar,dateadd(d,-(day(dateadd(m,1,getdate()))),dateadd(m,1,getdate())),106)) --Last Day of previous month

select top 10  sum(cantidad) as Cantidad, codProd, P.nombre as Nombre, SUM(cantXpvp) as Ganancia from DetalleVenta dv
inner join Producto P on dv.codProd=P.codProducto 
inner join OrdenCompra oc on dv.numOrd=oc.numOrden
where oc.fecha between @inicio and @fin
group by codProd, nombre
end
GO
/****** Object:  StoredProcedure [dbo].[sp_PporAcabarse]    Script Date: 07/02/2022 09:39:40 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[sp_PporAcabarse]
as
select *
from Producto P
where P.stock <= 9
GO
/****** Object:  StoredProcedure [dbo].[sp_precioXcantidad]    Script Date: 07/02/2022 09:39:40 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[sp_precioXcantidad] 
@codP varchar(4),
@cant integer,
@total decimal(8,2) output
as
begin 
	set @total =

 ((select precio from Producto where codProducto=@codP)*(@cant))

end
GO
/****** Object:  StoredProcedure [dbo].[sp_Tcliente]    Script Date: 07/02/2022 09:39:40 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[sp_Tcliente] as
select COUNT([cedulaCli]) as cliT from [dbo].[Cliente]
GO
/****** Object:  StoredProcedure [dbo].[sp_Tordencompra]    Script Date: 07/02/2022 09:39:40 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[sp_Tordencompra] as
select COUNT([numOrden]) as tot from [dbo].[OrdenCompra] where [fecha]=CONVERT(DATE, GETDATE())
GO
/****** Object:  StoredProcedure [dbo].[sp_Tproducto]    Script Date: 07/02/2022 09:39:40 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[sp_Tproducto] as
select COUNT([codProducto]) as PTotal from [dbo].[Producto]
GO
USE [master]
GO
ALTER DATABASE [BonuelosDias] SET  READ_WRITE 
GO
