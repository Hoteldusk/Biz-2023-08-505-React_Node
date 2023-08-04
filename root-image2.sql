create database imageDB;
use imageDB;

create table tbl_bbs(
	b_seq 			bigint 			primary key 	auto_increment,
	b_title 		varchar(125),
	b_content 		varchar(1000),
	b_nickname 		varchar(125),
	b_password 		varchar(125),
	b_ccode 		varchar(6),
	b_date 			varchar(10),
	b_viewcount 	long,
	b_image 		varchar(255),
    b_origin_image 	varchar(255)
);

create table tbl_file(
		f_seq 			bigint 			primary key 	auto_increment,
		f_bseq 			bigint,
		f_image 		varchar(255),
    	f_origin_image 	varchar(255)
		);
        
select * from tbl_files;
select * from tbl_bbs;


use imagedb;
show tables;
desc tbl_files;
desc tbl_bbs;

-- tbl_bbs.b_seq, tbl_files.f_bseq
alter table tbl_files
add constraint f_bbs foreign key (f_bseq)
references tbl_bbs(b_seq);

drop table tbl_files;
drop table tbl_bbs;

select * from tbl_bbs;
desc tbl_bbs;

insert into tbl_bbs(b_title,b_content)
values('게시판 테스트', '게시판 글쓰기');

commit;