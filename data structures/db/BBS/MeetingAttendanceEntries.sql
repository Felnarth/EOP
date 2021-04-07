USE [BBS]
GO

/****** Object:  Table [dbo].[MeetingAttendanceEntries]    Script Date: 4/6/2021 3:47:13 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[MeetingAttendanceEntries](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[UserId] [int] NOT NULL,
	[MeetingDate] [datetime] NOT NULL,
	[CompletedDate] [datetime] NOT NULL,
	[MeetingType] [nvarchar](max) NULL,
	[CreatedBy] [int] NOT NULL,
	[CreatedOn] [datetime] NOT NULL,
	[SiteId] [int] NOT NULL,
 CONSTRAINT [PK_dbo.MeetingAttendanceEntries] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

