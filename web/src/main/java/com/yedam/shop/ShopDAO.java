package com.yedam.shop;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import emp.DAO;

public class ShopDAO extends DAO{
	
	public void insertShipItem(ShopItem si) {
		String sql = "insert into shop_item(item_code, item_name, item_description, like_it, origin_price, sale_price, image) values (?,?,?,?,?,?,?)";
		
		connect();
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setString(1, si.getItemCode());
			psmt.setString(2, si.getItemName());
			psmt.setString(3, si.getItemDesc());
			psmt.setDouble(4, si.getLikeIt());
			psmt.setInt(5, si.getOriginPrice());
			psmt.setInt(6, si.getSalePrice());
			psmt.setString(7, si.getImage());
			
			int result = psmt.executeUpdate();
			
			System.out.println(result + "건이 입력됨");

		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			disconnect();
		}

	}

	public List<ShopItem> getShopItem() {
		List<ShopItem> list = new ArrayList<ShopItem>();
		String sql = "select * from shop_item order by item_code";
		connect();
		
		try {
			stmt = conn.createStatement();
			rs = stmt.executeQuery(sql);
			while(rs.next()) {
				ShopItem si = new ShopItem();
				si.setItemCode(rs.getString("item_code"));
				si.setItemName(rs.getString("item_name"));
				si.setItemDesc(rs.getString("item_description"));
				si.setOriginPrice(rs.getInt("origin_price"));
				si.setSalePrice(rs.getInt("sale_price"));
				si.setLikeIt(rs.getDouble("like_it"));
				si.setImage(rs.getString("image")==null? "0" : rs.getString("image"));
				list.add(si);
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally {
			disconnect();
		}
		return list;
	}
}
