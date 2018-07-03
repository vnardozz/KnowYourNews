DROP DATABASE IF EXISTS news_db;
CREATE DATABASE news_db;

use news_db;


CREATE TABLE articles (
  item_id INT NOT NULL AUTO_INCREMENT,
  Headline VARCHAR(255) NOT NULL,
  web_address VARCHAR(1000) NOT NULL,
  is_real boolean NOT NULL,
  PRIMARY KEY(item_id)
);

select * from articles;