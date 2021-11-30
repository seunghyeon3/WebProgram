package com.yedam.shop;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonArray;
import com.oreilly.servlet.MultipartRequest;
import com.oreilly.servlet.multipart.DefaultFileRenamePolicy;

@WebServlet("/ShopItemServlet")
public class ShopItemServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public ShopItemServlet() {
		super();

	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		request.setCharacterEncoding("UTF-8"); //요청정보 	
		response.setCharacterEncoding("utf-8");  //응답정보 
		response.setContentType("text/json;charset=utf-8");
		
		ShopDAO dao = new ShopDAO();
		List<ShopItem> list = dao.getShopItem();
		
		System.out.println(list);
		
		Gson gson = new GsonBuilder().setPrettyPrinting().create();
		response.getWriter().println(gson.toJson(list).toString());
		
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		
		request.setCharacterEncoding("UTF-8"); //요청정보 	
		response.setCharacterEncoding("utf-8");  //응답정보 
		response.setContentType("text/json;charset=utf-8");
		// 1. request 2. 저장위치 3. maxSize 4. UTF-8, euc-kr... 5. 리네임정책(같은 파일 있을때 덮어써져서 그렇게 안되도록 정하는 정책)
		//String item_code = request.getParameter("item_Code");// 요청정보에서 getParameter 못받아옴.
		ServletContext context = getServletContext();
		String savePath = context.getRealPath("upload"); //최상위폴더인, webapp의 하위폴더를 가르키므로 바로 넣음.
		int maxSize = 1024 * 1024 * 30; // byte 단위
		String encoding = "UTF-8";
		MultipartRequest mRequest = new MultipartRequest(request, savePath, maxSize, encoding, new DefaultFileRenamePolicy());
		
		String itemCode = mRequest.getParameter("item_code");
		String itemName = mRequest.getParameter("item_name");
		String itemDesc = mRequest.getParameter("item_desc");
		String likeIt = mRequest.getParameter("like_it");
		String originPrice = mRequest.getParameter("origin_price");
		String salePrice = mRequest.getParameter("sale_price");
		String image = mRequest.getFilesystemName("image");
		
		//System.out.println(mRequest.getParameterNames());
		
		ShopItem si = new ShopItem();
		si.setItemCode(itemCode);
		si.setItemName(itemName);
		si.setItemDesc(itemDesc);

		likeIt = (likeIt==null) ? "0" : likeIt;
		si.setLikeIt(Double.parseDouble(likeIt));
		
		originPrice = (originPrice==null) ? "0" : originPrice;
		si.setOriginPrice(Integer.parseInt(originPrice));
		
		salePrice = (salePrice==null) ? "0" : salePrice;
		si.setSalePrice(Integer.parseInt(salePrice));
		
		image = (image == null) ? "0" : image;
		si.setImage(image);
		
		ShopDAO dao = new ShopDAO();
		dao.insertShipItem(si);
		
		Gson gson = new GsonBuilder().setPrettyPrinting().create();
		response.getWriter().println(gson.toJson(si).toString());
		
	}

}
