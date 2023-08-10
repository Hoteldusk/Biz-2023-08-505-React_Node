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
select * from tbl_file;

drop table tbl_files;

alter table tbl_files drop constraint tbl_files_ibfk_1;

alter table tbl_files
add constraint f_bbs
foreign key(f_bseq)
references tbl_bbs(b_seq);
